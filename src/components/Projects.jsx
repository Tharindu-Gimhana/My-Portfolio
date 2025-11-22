function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website for a computer shop with shopping cart, User management, and admin dashboard with usual functionalities.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB' , 'Tailwind CSS' , ],
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      demoLink: 'https://github.com/Tharindu-Gimhana/-ROOT-computer-shop-management-system-',
      codeLink: '#',
    },
    {
      title: 'Library Management System',
      description: 'A web application to manage library operations including book inventory, member management, and borrowing.',
      tags: ['React', 'Node.js', 'Express', 'MySQL' , 'Bootstrap'],
      image: 'https://www.shriconnect.com/wp-content/uploads/2023/12/books-laptop-1-1536x1024.jpg',
      demoLink: 'https://github.com/Tharindu-Gimhana/Library-management-system-project',
    },
    {
      title: 'FoT News Corner - Mobile Application',
      description: 'A mobile app that provides the latest news and updates from the Faculty of Technology, University of Colombo.',
      tags: ['Android Studio', 'Firebase', 'Figma'],
      image: 'https://img.global.news.samsung.com/uk/wp-content/uploads/2025/04/Main-Page-Key-Visual-1000-x-563px.jpg',
      demoLink: 'https://github.com/Tharindu-Gimhana/FOT-News-Corner---The-News-App-',
      codeLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoLink: '#',
      codeLink: '#',
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary transition-all hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex-1 text-center px-4 py-2 bg-primary hover:bg-sky-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
