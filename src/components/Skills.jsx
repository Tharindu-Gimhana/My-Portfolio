function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'AWS / Azure', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary mr-3 rounded"></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-sky-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Problem Solving',
            'Team Collaboration',
            'Quick Learner',
            'Time Management',
          ].map((soft, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary/10 to-sky-500/10 p-6 rounded-xl text-center border border-primary/20 hover:border-primary transition-colors"
            >
              <p className="text-white font-semibold">{soft}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
