# LieuNyan 개인 포트폴리리오 웹사이트

개인 활동, 경력, 기술 스택을 정리한 **포트폴리오 웹사이트**입니다.  
React + TanStack Router 기반으로 제작되었으며, AWS를 활용해 정적 웹사이트로 배포하였습니다.

---

## 🚀 주요 기능 및 특징

- 다크 / 라이트 모드 지원
- TanStack Router 기반 파일 라우팅 구조
- Tailwind CSS로 빠른 스타일링

---

## 🛠 개발 스택

### **Frontend**

- React.js
- TanStack Router
- Tailwind CSS
- TypeScript

### **AI Tools**

- ChatGPT (코드 리뷰, 기능 설계, 기술 가이드)
- Cursor AI Editor (코드 자동화 & 생산성 향상)

---

## ☁️ 배포 환경

### **AWS**

- S3 — 정적 웹 호스팅
- CloudFront — CDN + HTTPS 적용
- Route53 — 도메인 연결
- ACM — SSL 인증서 관리

---

## 🔁 자동 배포 스크립트

이 프로젝트는 **쉘 스크립트 + AWS CLI**를 이용해 간단히 자동 배포할 수 있도록 구성했습니다.

### 1. 환경 변수 설정 (`.env`)

프로젝트 루트에 `.env` 파일 내에 아래 값을 설정합니다.

```env
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_DEFAULT_REGION=ap-northeast-2

S3_BUCKET_NAME=...
CLOUDFRONT_DISTRIBUTION_ID=...
```

### 2. 자동 배포 방법

1. **AWS CLI 설치**
   - 로컬 환경에 `aws` 명령어가 있어야 합니다. (예: `brew install awscli`)
2. **`.env` 설정 확인**
   - `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_DEFAULT_REGION`, `S3_BUCKET_NAME`, `CLOUDFRONT_DISTRIBUTION_ID` 값이 올바르게 들어있는지 확인합니다.
3. **배포 스크립트 실행**
   - 프로젝트 루트에서 아래 명령어를 실행하면 빌드 → S3 업로드 → CloudFront 캐시 무효화가 한 번에 수행됩니다.
   ```bash
   sh deploy.sh
   ```
