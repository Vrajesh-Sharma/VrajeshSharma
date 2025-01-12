import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Education
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'pr-12 md:ml-auto md:pl-12 md:pr-0 md:w-1/2' : 'pl-12 md:mr-auto md:pr-12 md:pl-0 md:w-1/2'}`}
              >
                <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="absolute top-6 -left-6 md:left-auto md:right-full md:mr-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.year.split('-')[0]}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{item.institution}</h3>
                  <p className="text-lg font-medium text-gray-300 mb-2">{item.degree}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}