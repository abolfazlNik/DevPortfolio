import { StaticImageData } from "next/image"
import { FieldError, UseFormRegister } from "react-hook-form"
import { ZodType, z } from "zod"

export interface ImageData {
  src: StaticImageData | string
  alt: string
  width: number
  height: number
  icon?: boolean
}

export interface IDetails {
  date: string
  headline: string
  compony: string
  details: string
  colorCompony: string
  id: number
  url: string | undefined
}

export interface IRenderSkills {
  start?: number
  end?: number
  gap?: number
}

export interface ILinks {
  name: string
  link: string
}

export type formData = {
  fullName: string
  email: string
  message: string
}

export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error: FieldError | undefined
}

export type ValidFieldNames = "fullName" | "email" | "message"

export const messageSchema: ZodType<formData> = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})
