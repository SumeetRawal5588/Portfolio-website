import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Cpu, 
  GitBranch, 
  Shield,
  Activity,
  Zap,
  Package
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Deployed' },
    { number: '99.9%', label: 'Uptime Maintained' },
  ];

  const techIcons = [
    { icon: Package, name: 'Docker', color: 'text-blue-500' },
    { icon: Server, name: 'Kubernetes', color: 'text-blue-600' },
    { icon: Cloud, name: 'AWS', color: 'text-orange-500' },
    { icon: GitBranch, name: 'Jenkins', color: 'text-red-500' },
    { icon: Cpu, name: 'Terraform', color: 'text-purple-500' },
    { icon: Shield, name: 'Security', color: 'text-green-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate DevOps Engineer with expertise in building and maintaining scalable infrastructure solutions. 
                I specialize in cloud technologies, containerization, and automation to streamline development workflows.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My focus is on implementing DevOps best practices to improve system reliability, reduce deployment times, 
                and enable teams to deliver high-quality software faster.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-700 dark:to-dark-600 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-3 gap-6">
                {techIcons.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-lg card-hover cursor-pointer"
                    >
                      <Icon className={`w-8 h-8 ${tech.color} mb-2`} />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4"
              >
                <div className="w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center">
                  <Activity className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4"
              >
                <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
