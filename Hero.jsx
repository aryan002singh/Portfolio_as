import React from 'react'
import { Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Aryan_Singh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-max section-padding">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img
              src="https://drive.google.com/file/d/1LaHUz8rSsrKqhunHFX3ISIZQKgWUSQ1v/view?usp=drive_linkk"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-royal-blue-500 shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="gradient-text">Aryan Singh</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full Stack Developer
          </h2>
          
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-royal-blue-600 hover:bg-royal-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <a
              href="#about"
              className="flex items-center gap-2 border-2 border-royal-blue-600 text-royal-blue-600 hover:bg-royal-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-royal-blue-600">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero