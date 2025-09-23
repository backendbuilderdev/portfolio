import Section from '../../structure/section'
import Container from '../../structure/container'

export default function ResumeViewer() {
  const docId = "2PACX-1vSeGmrH3pUMN2KwhKaYwqiJZsr5Hjifnme272XN-Y0MDz9l7fgVIjZhFRBdEoYVaKNnky6b9ppVD8mo"
  const embedUrl = `https://docs.google.com/document/d/e/${docId}/pub?embedded=true`
  const downloadUrl = `https://docs.google.com/document/d/1nfNPdmnulWfzMbLci3-nX9c75Uh_M6vSt24FJ5iRFE0/export?format=pdf`

  return (
    <Section classProp="resume-section">
      <Container spacing={['verticalXXXLrg']}>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-6">Your Next Hire</h1>
          {/* Download Button */}
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow"
          >
            Download
          </a>
          {/* <a
            href={downloadUrl}
            download="Sandeep_Pal_Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download
          </a> */}
        </div>
        
        <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <iframe
            src={embedUrl}
            className="w-4/5 h-[1200px] mx-auto block"
            allow="autoplay"
            width="100%"
            height="1130px"
          ></iframe>
        </div>
      </Container>
    </Section>
  )
}