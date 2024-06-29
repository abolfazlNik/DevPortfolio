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
    <>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {error && <span className="error-message">{error.message}</span>}
    </>
  )
}

export default FormField
