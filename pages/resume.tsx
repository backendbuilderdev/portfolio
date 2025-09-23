import dynamic from "next/dynamic"
import TitleResume from "./title.resume"

const ResumeViewer = dynamic(() => import('../src/components/sections/index/resume'))

export default function Resume() {
  return (
    <>
      <TitleResume />
      <ResumeViewer />
    </>
  )
}