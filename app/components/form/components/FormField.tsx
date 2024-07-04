import { FormFieldProps } from "@/app/shared/types"
import React, { FC } from "react"

const FormField: FC<FormFieldProps> = ({
  type,
  error,
  name,
  placeholder,
  register,
}) => {
  return (
    <div
      className={`relative flex flex-col w-full gap-2 ${
        type === "textarea" ? "h-[120px]" : "h-[74px]"
      }`}
    >
      {type === "textarea" ? (
        <textarea
          className={`md:min-h-24 min-h-20 w-full rounded-lg border border-transparent bg-custom-gray-light text-custom-black placeholder:text-custom-gray-dark md:p-4 p-2 focus:outline-transparent ${
            error && "!border-red-500 !border"
          }`}
          placeholder={placeholder}
          {...register(name as any)}
        />
      ) : (
        <input
          className={`md:min-h-14 min-h-12 rounded-lg w-full border border-transparent bg-custom-gray-light text-custom-black placeholder:text-custom-gray-dark md:p-4 p-2 focus:outline-transparent ${
            error && "!border-red-500 !border"
          }`}
          type={type}
          placeholder={placeholder}
          {...register(name as any)}
        />
      )}
      {error && <span className="text-red-400 text-sm">{error.message}</span>}
    </div>
  )
}

export default FormField
