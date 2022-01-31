import { ReturnFormData } from './returnFormData'

export type FormProps = {
    name?: string;
    handleSubmit: (data: ReturnFormData) => void;
    children: React.ReactNode
}