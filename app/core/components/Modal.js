import {forwardRef, useImperativeHandle, useState} from "react"

import {Icon} from "./home/Icon"

const Modal = forwardRef(({children, onCloseModal}, ref) => {
  let [modalClassName, setModalClassName] = useState("hidden")

  useImperativeHandle(ref, () => ({
    openModal() {
      setModalClassName("animate-slide-in")
    },
    closeModal() {
      setModalClassName("animate-slide-out")
      setTimeout(() => {
        setModalClassName("hidden")
      }, 400)
    },
  }))

  return (
    <div className={`fixed z-50 inset-0 overflow-y-auto ${modalClassName}`}>
      <div className="flex flex-col items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex flex-col justify-center items-center">{children}</div>
        </div>
      </div>
    </div>
  )
})
export {Modal}
