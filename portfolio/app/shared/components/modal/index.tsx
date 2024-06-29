import { useModalState } from "@/app/store/modal"
import React, { ReactNode } from "react"

const Modal = ({ title, children }: { title: string; children: ReactNode }) => {
  const { openModal, toggleModal } = useModalState()
  return (
    <>
      {openModal && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-40"
            onClick={() => toggleModal(false)}
          ></div>

          <div className="fixed flex items-center flex-col md:py-16 py-8 md:w-2/3 w-[85%] z-50 bg-custom-black bg-opacity-60 backdrop-blur-2xl rounded-2xl sm:h-[700px] h-auto border-2 border-custom-gray-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="lg:text-8xl text-[7vw] md:font-bold text-custom-white lg:mb-16 mb-10">
              {title}
            </h3>
            {children}
          </div>
        </>
      )}
    </>
  )
}

export default Modal
