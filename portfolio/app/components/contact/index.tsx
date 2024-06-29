import { formData, messageSchema } from "@/app/shared/types"
import React from "react"
import { useForm } from "react-hook-form"
import FormField from "./components/FormField"
import { zodResolver } from "@hookform/resolvers/zod"
import useContact from "@/app/shared/hooks/contact"
import toast from "react-hot-toast"
import { useModalState } from "@/app/store/modal"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<formData>({ resolver: zodResolver(messageSchema) })
  const { toggleModal } = useModalState()
  const contact = useContact()
  const onSubmit = async (data: formData) => {
    contact.submitForm(data)
    toast.success("Thank You! I'll Respond to Your Message Soon.", {
      duration: 4000,
    })
    reset()
    toggleModal(false)
  }
  return (
    <form
      className="flex items-center lg:w-1/2 md:w-[70%] w-[90%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-col flex items-center gap-6 w-full">
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
          type="textarea"
          name="message"
          placeholder="Message"
          register={register}
          error={errors.message}
        />
        <button
          type="submit"
          className="text-custom-black sm:h-16 h-12 w-full rounded-lg bg-custom-white sm:text-2xl text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
