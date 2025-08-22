import React, { useState, useEffect, useRef } from 'react'
import { Code, Database, Globe, Smartphone, Palette, Users } from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 95, icon: Code },
    { name: 'React/Next.js', level: 90, icon: Globe },
    { name: 'Node.js/Express', level: 85, icon: Database },
    { name: 'MongoDB/PostgreSQL', level: 85, icon: Database },
    { name: 'React Native', level: 75, icon: Smartphone },
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 95, icon: Code },
    { name: 'Team Collaboration', level: 90, icon: Users },
    { name: 'Communication', level: 88, icon: Users },
    { name: 'UI/UX Design', level: 82, icon: Palette },
    { name: 'Project Management', level: 80, icon: Users },
    { name: 'Leadership', level: 78, icon: Users },
  ]

  const SkillBar = ({ skill, index }) => (
    <div className="mb-6" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon size={18} className="text-royal-blue-600" />
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-sm font-medium text-royal-blue-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-royal-blue-500 to-royal-blue-700 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'animate-progress' : 'w-0'
          }`}
          style={{ '--progress': `${skill.level}%` }}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills that I've developed throughout my career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Code className="text-royal-blue-600" size={28} />
              Technical Skills
            </h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="text-royal-blue-600" size={28} />
              Soft Skills
            </h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB',
              'Git', 'Figma', 'Tailwind CSS', 'GraphQL'
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills