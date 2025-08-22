import React from 'react'
import { GraduationCap, Briefcase, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="bg-gradient-to-br from-royal-blue-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-royal-blue-600 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Professional Summary</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm a final year B.Tech Computer Science student and passionate Full Stack Developer 
                with hands-on experience in building modern web applications. I specialize in React, 
                Node.js, and cutting-edge technologies, constantly learning and applying new skills 
                to create innovative solutions that make a real impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-royal-blue-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-royal-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h4>
                  <p className="text-gray-600">University of Technology • 2021-2025 (Expected)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-royal-blue-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-royal-blue-600 rounded-lg">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">What I Love</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding or studying, you'll find me exploring new frameworks, 
                contributing to open-source projects, and building personal projects. 
                I'm passionate about problem-solving and turning creative ideas into 
                functional applications that users love.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop&q=80"
              alt="About me"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About