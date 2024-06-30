import Image from "next/image"
import { nikName } from "@/public/images"
import { BallButton, Header, Modal } from "./shared/components"
import {
  About,
  Experience,
  MarqueeScroll,
  ProjectsScrollSection,
  Skills,
} from "./components"
import Form from "./components/form"
import GlobalInitializer from "./shared/components/global-initializer"

export default function Home() {
  return (
    <>
      <GlobalInitializer />
      <div className="h-svh">
        <Header />
        <div className="lg:mx-[70px] mx-[22px] lg:h-[85%] h-full flex items-center justify-center">
          <Image
            className="w-full select-none lg:mb-0 h-full mb-40"
            src={nikName}
            alt="nik"
          />
        </div>
      </div>

      <Modal title="CONTACT ME">
        <Form />
      </Modal>

      <About />
      <ProjectsScrollSection />
      <MarqueeScroll />
      <Skills />
      <Experience />
      <BallButton />
    </>
  )
}
