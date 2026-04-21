import { motion } from 'framer-motion';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'DevOps Pipeline Automation',
      description: 'Automated CI/CD pipeline for microservices architecture with Kubernetes deployment and monitoring.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
      technologies: ['Jenkins', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus'],
      category: 'devops',
      githubUrl: 'https://github.com/SumeetRawal5588/devops-pipeline',
      liveUrl: null,
      features: ['Automated testing', 'Container orchestration', 'Infrastructure as code', 'Monitoring']
    },
    {
      id: 2,
      title: 'Cloud Migration Tool',
      description: 'A comprehensive tool for migrating on-premise applications to AWS cloud with minimal downtime.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      technologies: ['Python', 'AWS SDK', 'Docker', 'React', 'PostgreSQL'],
      category: 'devops',
      githubUrl: 'https://github.com/SumeetRawal5588/cloud-migration',
      liveUrl: null,
      features: ['Automated migration', 'Data validation', 'Rollback capabilities', 'Cost optimization']
    },
    {
      id: 3,
      title: 'Container Orchestration Platform',
      description: 'Custom platform for managing containerized applications with auto-scaling and load balancing.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
      technologies: ['Kubernetes', 'Docker', 'Go', 'React', 'gRPC'],
      category: 'devops',
      githubUrl: 'https://github.com/SumeetRawal5588/container-platform',
      liveUrl: null,
      features: ['Auto-scaling', 'Load balancing', 'Health monitoring', 'Resource optimization']
    }
  ];

  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work in DevOps, Cloud Engineering, and Full-Stack Development
          </p>
        </motion.div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-lg shadow-lg overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs text-gray-500 dark:text-gray-400"
                      >
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>

                              </div>
            </motion.div>
          ))}
        </div>

              </div>
    </section>
  );
};

export default Projects;
