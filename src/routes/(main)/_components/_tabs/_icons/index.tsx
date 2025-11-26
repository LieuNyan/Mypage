// icons/skills.tsx
import {
  Server,
  Database,
  Box,
  Cpu,
  Layers,
  Globe,
  Palette,
  Smartphone,
  SmartphoneCharging,
  Cloud,
  Wrench,
  Bug,
  GitBranch,
  Users,
  FileCode,
} from 'lucide-react'

export const BackendIcon = () => <Server className='text-accent h-6 w-6' />
export const NodejsIcon = () => <Cpu className='text-accent h-5 w-5' />
export const DatabaseIcon = () => <Database className='text-accent h-5 w-5' />
export const OrmIcon = () => <Layers className='text-accent h-5 w-5' />

export const FrontendIcon = () => <Globe className='text-accent h-6 w-6' />
export const ReactIcon = () => <Palette className='text-accent h-5 w-5' />
export const FrontendToolIcon = () => <Box className='text-accent h-5 w-5' />

export const AppIcon = () => <Smartphone className='text-accent h-6 w-6' />
export const AndroidIcon = () => <SmartphoneCharging className='h-5 w-5 text-green-500' />
export const IosIcon = () => <Smartphone className='h-5 w-5 text-gray-300' />

export const InfraIcon = () => <Cloud className='text-accent h-6 w-6' />
export const AwsIcon = () => <Cloud className='h-5 w-5 text-yellow-500' />
export const CiCdIcon = () => <Wrench className='text-accent h-5 w-5' />

export const ServiceIcon = () => <Users className='text-accent h-6 w-6' />
export const SentryIcon = () => <Bug className='h-5 w-5 text-red-500' />
export const GitIcon = () => <GitBranch className='h-5 w-5 text-orange-500' />
export const NotionIcon = () => <FileCode className='text-accent h-5 w-5' />
