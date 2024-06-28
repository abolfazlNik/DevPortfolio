import { useState } from "react"

const useContact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const submitForm = (form: {
    fullName: string
    email: string
    message: string
  }) => {
    setIsLoading(true)

    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res)
      })
      .finally(() => setIsLoading(false))
  }

  return { isLoading, submitForm }
}

export default useContact
