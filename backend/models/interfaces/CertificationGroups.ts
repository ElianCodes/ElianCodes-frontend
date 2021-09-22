import { Certification } from './Certification'

export interface CertificationGroup {
    id?: string
    title: string
    description?: string
    certifications?: Certification[]
}