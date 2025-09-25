import dynamic from "next/dynamic"
import TitleCheatsheet from "./title.cheatsheet"

const CheatsheetContent = dynamic(() => import('../src/components/sections/cheatsheet/content'))

export default function Cheatsheet() {
  return (
    <>
      <TitleCheatsheet />
      <CheatsheetContent />
    </>
  )
}