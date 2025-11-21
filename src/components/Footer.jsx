function Footer() {
  return (
    <footer className="bg-darker py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Built with React, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
