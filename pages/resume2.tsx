import Head from "next/head";
import { useState, useEffect } from "react";

export default function Resume() {
  // Replace with your actual Google Docs document ID
  const docId = "2PACX-1vSeGmrH3pUMN2KwhKaYwqiJZsr5Hjifnme272XN-Y0MDz9l7fgVIjZhFRBdEoYVaKNnky6b9ppVD8mo";

  // Correct Google Docs URLs for embedding and downloading
  const embedUrl = `https://docs.google.com/document/d/e/${docId}/pub?embedded=true`;
  const downloadUrl = `https://docs.google.com/document/d/e/${docId}/export?format=pdf`;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Set a timeout to handle cases where iframe never loads
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleDownload = () => {
    // Analytics tracking can be added here if needed
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>

        {/* Embed Google Docs */}
        <div className="w-full max-w-4xl h-[80vh] min-h-screen border rounded-lg overflow-hidden shadow flex justify-center">
          <iframe
            src={embedUrl}
            className="w-4/5 h-[1200px] mx-auto block"
            allow="autoplay"
            width="80%"
            height="1200px"
          ></iframe>
        </div>

        {/* Download Button */}
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow"
        >
          Download Resume (PDF)
        </a>
      </div>
    </>
  );
}


// This component bypasses the default layout to provide full-screen resume display
Resume.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};