function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated BICT student in Sri Lanka with a passion for technology and software development.
              My journey in tech has been driven by curiosity and a desire to create meaningful solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through my academic pursuits and personal projects, I've developed a strong foundation in
              web development, programming, and problem-solving. I'm constantly learning and exploring
              new technologies to expand my skill set.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm actively seeking internship opportunities where I can apply my knowledge, contribute
              to innovative projects, and grow as a professional developer.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors">
                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                <p className="text-gray-400">Technologies Mastered</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors">
                <h3 className="text-3xl font-bold text-primary mb-2">3+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Bachelor of Information and Communication Technology(Hons) 
                  </h4>
                  <p className="text-gray-400 mb-2">Faculty of Technology , University of Colombo , Sri Lanka</p>
                  <p className="text-gray-500 text-sm">2023 - 2027</p>
                </div>

                <div className="border-l-4 border-slate-600 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    G.C.E A/L Examination
                  </h4>
                  <p className="text-gray-400 mb-2">Walasmulla National Collage</p>
                  <p className="text-gray-500 text-sm">2019 - 2021</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Web Development</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Problem Solving</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Cloud Computing</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
