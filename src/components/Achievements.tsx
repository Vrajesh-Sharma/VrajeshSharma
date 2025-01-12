import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../data';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-cyan-400/10 rounded-lg">
                      <Trophy className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{achievement.description}</p>
                  <span className="inline-block mt-4 text-sm px-3 py-1 bg-gray-700 rounded-full text-gray-300">
                    {achievement.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}