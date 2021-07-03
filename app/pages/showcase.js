import {useEffect, useRef, useState} from "react"

import {Header} from "@/components/Header"
import {Footer} from "@/components/home/Footer"
import {Icon} from "@/components/home/Icon"
import {Modal} from "@/components/Modal"
import {ShowcaseThumbnail} from "@/components/ShowcaseThumbnail"
import {SocialCards} from "@/components/SocialCards"
import showcaseList from "@/utils/showcaseList"

const LanguagesPage = ({showcase}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const modalRef = useRef()

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  const openModal = ({title, thumbnail, description, URL}) => {
    setSelectedItem({title, thumbnail, description, URL})
    modalRef.current?.openModal()
  }
  const closeModal = () => {
    modalRef.current?.closeModal()
  }

  return (
    <div className="relative py-1 md:py-3 min-h-screen bg-white dark:bg-purple-deep">
      <SocialCards imageUrl="/social-homepage.png" />
      <Header
        className="px-6 mx-auto max-w-7xl"
        hasLightBg
        useColoredLogo
        stickyBgclassName="bg-white dark:bg-purple-deep"
        hasFade
        onNavToggle={(isOpen) => {
          setNavIsOpen(isOpen)
        }}
      />
      <div
        className={
          "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
          (navIsOpen ? "z-20 fixed" : "-z-10")
        }
      ></div>
      <main className="mx-auto max-w-7xl px-6 py-24 xl:py-36 text-black dark:text-dark-mode-text space-y-16 lg:space-y-20">
        <div className="space-y-6">
          <h1 className="font-primary text-3xl lg:text4xl xl:text-5xl font-semibold">Showcase</h1>
          <p className="font-secondary text-lg text-gray-600 dark:text-gray-300">
            Here are some beautiful websites built with Blitz.js
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {showcase.map(({title, thumbnail, description, URL}, index) => {
            return (
              <ShowcaseThumbnail
                onClick={() => {
                  openModal({title, thumbnail, description, URL})
                }}
                key={index}
                title={title}
                thumbnail={thumbnail}
                URL={URL}
              />
            )
          })}
        </div>
        <div className="font-secondary text-base text-gray-600 dark:text-gray-300">
          Want to submit your website?{" "}
          <a
            href="https://github.com/blitz-js/blitzjs.com-translation#starting-a-new-translation"
            target="_blank"
            rel="noreferrer"
            className="text-purple-light dark:text-purple-extralight font-medium dark:font-bold no-underline dark:underline hover:underline"
          >
            Here&apos;s a way to do that
          </a>
        </div>
      </main>
      <Footer className="text-black dark:text-dark-mode-text" hasDarkMode />
      <Modal ref={modalRef} onCloseModal={closeModal}>
        {selectedItem !== null && (
          <div className="rounded overflow-hidden w-full bg-white mx-3 md:mx-0 lg:mx-0">
            <span className="cursor-pointer absolute top-0 right-0 m-2" onClick={closeModal}>
              <Icon name="modalClose" />
            </span>
            <a href={selectedItem.URL} rel="noreferrer" target="_blank">
              <img
                className="w-full bg-cover"
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
              />
            </a>
            <div className="p-5">
              <a
                className="font-primary text-sm lg:text-md xl:text-lg text-gray-600 hover:underline font-semibold hover:text-purple-light"
                href={selectedItem.URL}
                target="_blank"
                rel="noreferrer"
              >
                {selectedItem.title}
              </a>
              <h4 className="font-secondary text-sm lg:text-md xl:text-md text-gray-600 my-1">
                {selectedItem.description}
              </h4>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

const getStaticProps = async () => {
  return {
    props: {
      showcase: showcaseList,
    },
    revalidate: 3 * 60 * 60, // 3 hours
  }
}

LanguagesPage.meta = {
  title: "Showcase - Blitz.js",
  description: `Blitz is a hyper-productive fullstack React framework that's built on Next.js and features a "Zero-API" data layer.`,
}

export default LanguagesPage
export {getStaticProps}
