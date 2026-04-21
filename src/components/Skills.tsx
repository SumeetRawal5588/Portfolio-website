import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Code,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Containerization',
      icon: Layers,
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Rancher'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'CI/CD & Automation',
      icon: Code,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Infrastructure & Tools',
      icon: Server,
      skills: ['Ansible', 'Prometheus', 'Grafana', 'Nginx'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
