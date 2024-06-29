import { FieldError, UseFormRegister } from "react-hook-form"
import { ZodType, z } from "zod"

export interface IDetails {
  date: string
  headline: string
  compony: string
  details: string
  colorCompony: string
  id: number
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

// export const UserSchema: ZodType<FormData> = z
//   .object({
//     email: z.string().email(),
//     githubUrl: z
//       .string()
//       .url()
//       .includes("github.com", { message: "Invalid GitHub URL" }),
//     yearsOfExperience: z
//       .number({
//         required_error: "required field",
//         invalid_type_error: "Years of Experience is required",
//       })
//       .min(1)
//       .max(10),
//     password: z
//       .string()
//       .min(8, { message: "Password is too short" })
//       .max(20, { message: "Password is too long" }),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"], // path of error
//   })

export const messageSchema: ZodType<formData> = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})
