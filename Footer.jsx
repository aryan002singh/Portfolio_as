import React from 'react'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aryan002singh',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aryan-singh-725874255/',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aryansingh',
      icon: Twitter
    },
    {
      name: 'Email',
      url: 'mailto:aryan.singh@email.com',
      icon: Mail
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Aryan Singh</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating meaningful digital experiences
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-royal-blue-600 rounded-full transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Aryan Singh. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                Made with <Heart size={16} className="text-red-500" /> and lots of coffee
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer