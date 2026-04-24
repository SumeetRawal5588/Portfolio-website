import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'QA Engineer (Integration)',
      company: 'AtomIQ',
      location: 'Chennai',
      period: 'June 2025 - Present',
      responsibilities: [
        'Managing CI/CD pipelines and deployments for QA environments (automated builds, testing, and releases)',
        'Creating workflows for ERP, CRM & E-commerce integrations (Zoho, NetSuite, Shopify, Flipkart, Amazon, Salesforce)',
        'Managing API integrations (auth, scopes, error handling)',
        'Ensure seamless integration between microservices and APIs'
      ],
      technologies: ['IPASS', 'Javascript', 'Databases', 'REST APIs']
    },
    {
      title: 'QA Engineer Intern',
      company: 'AtomIQ',
      location: 'Sirohi, Rajasthan',
      period: 'December 2024 - May 2025',
      responsibilities: [
        'Assisted in creating and maintaining test cases and test documentation',
        'Performed manual and automated testing of web applications',
        'Identified and documented bugs with detailed reproduction steps',
        'Participated in agile testing ceremonies and sprint planning'
      ],
      technologies: ['Manual Testing', 'Bug Tracking', 'Test Documentation', 'Agile', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in Automation & DevOps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-lg shadow-lg p-8 card-hover"
              style={{
                transform: index % 2 === 1 ? 'translateY(40px)' : 'translateY(0)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="text-gray-700 dark:text-gray-300 pl-6 relative"
                    >
                      <span className="absolute left-0 top-2 w-2 h-2 bg-primary-500 rounded-full"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
