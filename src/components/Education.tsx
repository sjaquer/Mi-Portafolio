import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [showAll, setShowAll] = useState(false);

  const visibleEducation = showAll ? education : education.slice(0, 6);


  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
              Educación y Certificaciones
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Aprendizaje continuo y desarrollo profesional mediante educación formal y certificaciones de la industria
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F2A900] to-[#0072C6] transform md:-translate-x-0.5"></div>

          {/* Items de educacion*/}
          <div className="space-y-12">
            {visibleEducation.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Nodo Timeline  */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#F2A900] to-[#0072C6] rounded-full transform md:-translate-x-2 z-10 shadow-lg">
                  <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div
                    onClick={() => {
                      if (edu.certificateUrl) {
                        window.open(edu.certificateUrl, '_blank');
                      }
                    }}
                    className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-[#0072C6]/30 transition-all duration-300"
                    style={{ cursor: edu.certificateUrl ? 'pointer' : 'default' }}
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {edu.status === 'Current Student' ? (
                          <GraduationCap className="text-[#0072C6]" size={20} />
                        ) : (
                          <Award className="text-green-400" size={20} />
                        )}
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          edu.status === 'Current Student' 
                            ? 'bg-[#0072C6]/20 text-[#0072C6] border border-[#0072C6]/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F2A900] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-[#0072C6] font-medium mb-4">{edu.institution}</p>

                    {/* GPA */}
                    {edu.gpa && (
                      <div className="mb-4">
                        <span className="text-sm text-gray-400">GPA: </span>
                        <span className="text-white font-medium">{edu.gpa}</span>
                      </div>
                    )}

                    {/* Relevant Courses */}
                    {edu.relevant && (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400 font-medium">Cursos Relevantes:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevant.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F2A900]/5 to-[#0072C6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
{education.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-gradient-to-r from-[#F2A900] to-[#0072C6] text-white rounded-lg font-medium hover:from-[#d99900] hover:to-[#0060a3] transition-all duration-300"
            >
              {showAll ? 'Mostrar menos' : 'Mostrar línea de tiempo completa'}
            </button>
          </div>
        )}


        {/* Certificacione Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Aprendizaje y Desarrollo Adicional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Core Principles of Sustainable Business Strategy',
              'Applications of Artificial Intelligence in Business',
              'Data Analysis and Visualization with Excel and Power BI',
              'Applied Python Programming for Artificial Intelligence',
              'Fundamentals of Machine Learning and Predictive Modeling',
              'Modern Web Application Development and Deployment',
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#0072C6]/30 transition-colors"
              >
                <Award className="text-[#0072C6] flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;