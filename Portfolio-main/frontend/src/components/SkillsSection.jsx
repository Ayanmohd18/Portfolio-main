import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", brandColor: "#3776ab" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", brandColor: "#ed1c24" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg", brandColor: "#276dc3" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", brandColor: "#336791" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", brandColor: "#4479a1" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", brandColor: "#47a248" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", brandColor: "#3ecf8e" },
    ],
  },
  {
    title: "AI Agent Development",
    skills: [
      { name: "CrewAI", logo: "/logos/crewai-logo.png", brandColor: "#ff5a50" },
      { name: "LangChain", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/LangChain_Logo.svg", brandColor: "#4e9a3c" },
      { name: "LangGraph", logo: "data:image/jpeg;base64,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", brandColor: "#ff5722" },
      { name: "LlamaIndex", logo: "data:image/jpeg;base64,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", brandColor: "#6c5ce7" },
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png", brandColor: "#10a37f" },
      { name: "Google Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", brandColor: "#4285f4" },
      { name: "MCP (Model Context Protocol)", logo: "https://cdn-icons-png.flaticon.com/512/2620/2620971.png", brandColor: "#3f51b5" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", brandColor: "#f05032" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", brandColor: "#2496ed" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", brandColor: "#4285f4" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", brandColor: "#007acc" },
      { name: "PyCharm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", brandColor: "#21d789" },
      { name: "Kaggle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg", brandColor: "#20beff" },
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", brandColor: "#f2c811" },
      { name: "Tableau", logo: "https://www.tableau.com/themes/custom/tableau_www/logo.svg", brandColor: "#e97627" },
      { name: "Google Colab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg", brandColor: "#f9ab00" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", brandColor: "#150458" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", brandColor: "#013243" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", brandColor: "#11557c" },
      { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", brandColor: "#f7931e" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", brandColor: "#ee4c2c" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", brandColor: "#ff6f00" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", brandColor: "#5c3ee8" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", brandColor: "#000000" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg", brandColor: "#ff4b4b" },
      { name: "Hadoop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg", brandColor: "#66ccff" },
      { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg", brandColor: "#e25a1c" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-stone-800 mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group flex flex-col items-center gap-2 p-4 rounded-lg transition-transform duration-300 hover:scale-110">
                    <div
                      className="w-20 h-20 flex items-center justify-center rounded-full bg-stone-50 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                      style={{ '--brand-color': skill.brandColor }}
                    >
                      <img src={skill.logo} alt={`${skill.name} logo`} className="h-12 w-12 object-contain" />
                    </div>
                    <span className="text-stone-700 font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
