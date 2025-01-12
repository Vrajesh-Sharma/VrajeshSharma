import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">                
              I’m a Machine Learning Enthusiast and Full Stack Developer pursuing a B.Tech in Computer Science Engineering 
              at Adani University. As the Machine Learning Lead at ASPDC, I mentor peers and explore the fascinating world of 
              AI, backed by certifications from Google, ISRO, and Skill India in Python, Machine Learning, and Deep Learning.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Beyond academics, I actively engage in hackathons, research, and workshops, sharing knowledge on advanced topics 
              like neural networks. My passion lies in leveraging technology to solve complex problems and drive innovation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🌍 Based in Ahmedabad, Gujarat</li>
                  <li>💼 Machine Learning Lead at ASPDC</li>
                  <li>🎓 B.Tech in Computer Science Engineering</li>
                  <li>🌱 Currently learning Neural Networks</li>
                  <li>💬 Ask me about AI, Node.js, Database</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}