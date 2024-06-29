import { formData, messageSchema } from "@/app/shared/types"
import React from "react"
import { useForm } from "react-hook-form"
import FormField from "./components/FormField"
import { zodResolver } from "@hookform/resolvers/zod"
import useContact from "@/app/shared/hooks/contact"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<formData>({ resolver: zodResolver(messageSchema) })

  const contact = useContact()
  const onSubmit = async (data: formData) => {
    contact.submitForm(data)
    console.log("success", data)
  }
  return (
    <form className="bg-blue-50" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto">
        <FormField
          type="text"
          name="fullName"
          placeholder="Full Name"
          register={register}
          error={errors.fullName}
        />
        <FormField
          type="email"
          name="email"
          placeholder="Email Address"
          register={register}
          error={errors.email}
        />
        <FormField
          type="text"
          name="message"
          placeholder="Message"
          register={register}
          error={errors.message}
        />
        <button type="submit" className="text-white">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
