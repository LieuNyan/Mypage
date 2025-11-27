#!/bin/bash
set -e  # ❗ 에러 발생 시 즉시 종료
trap 'echo "❌ 에러 발생! 스크립트를 중단합니다."; exit 1' ERR

# 0. .env 로드
if [ -f ".env" ]; then
  echo "📦 .env 파일 로드 중..."
  set -a
  source .env
  set +a
else
  echo "⚠️ .env 파일을 찾을 수 없습니다. 환경 변수를 확인하세요."
  exit 1
fi

# 1. 필수 환경변수 검사
[ -z "$AWS_ACCESS_KEY_ID" ] && echo "❌ AWS_ACCESS_KEY_ID 누락" && exit 1
[ -z "$AWS_SECRET_ACCESS_KEY" ] && echo "❌ AWS_SECRET_ACCESS_KEY 누락" && exit 1
[ -z "$S3_BUCKET_NAME" ] && echo "❌ S3_BUCKET_NAME 누락" && exit 1
[ -z "$CLOUDFRONT_DISTRIBUTION_ID" ] && echo "❌ CLOUDFRONT_DISTRIBUTION_ID 누락" && exit 1

if [ -z "$AWS_DEFAULT_REGION" ]; then
  echo "⚠️ AWS_DEFAULT_REGION이 없어 ap-northeast-2로 설정합니다."
  export AWS_DEFAULT_REGION="ap-northeast-2"
fi

# 2. 프로젝트 빌드
yarn build

# 3. 로컬 빌드 폴더
BUILD_DIR="./dist"

echo "🚀 Uploading $BUILD_DIR → s3://$S3_BUCKET_NAME"
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET_NAME" --delete
echo "✅ Upload complete!"

# 4. CloudFront Invalidation
echo "💨 CloudFront invalidation 생성 중..."
aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/*"

echo "🎉 Deploy complete!"