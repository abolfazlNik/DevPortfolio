"use client"
import { useState } from "react"

const useContact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = (form: {
    fullName: string
    email: string
    message: string
  }) => {
    setIsLoading(true)
    setError(null)

    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .catch((err) => {
        console.error("Error submitting form:", err)
      })
      .finally(() => setIsLoading(false))
  }

  return { isLoading, error, submitForm }
}

export default useContact
