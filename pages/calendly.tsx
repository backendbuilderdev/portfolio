import dynamic from "next/dynamic"
import TitleCalendly from "./title.calendly"

const CalendlyEmbed = dynamic(() => import('../src/components/sections/calendly/embed'))

export default function Calendly() {
  return (
    <>
      <TitleCalendly />
      <CalendlyEmbed />
    </>
  )
}