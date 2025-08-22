import React from 'react'

const DownloadButton = () => {
  return (
    <a 
      href="https://drive.google.com/file/d/1glFbpxf7qxy3t0Uk543oQ8elTYQrfkhD/view?usp=drive_link" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mt-8 px-6 py-3 bg-royal-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-royal-blue-700 transition duration-200"
    >
      Download My Resume
    </a>
  )
}

export default DownloadButton