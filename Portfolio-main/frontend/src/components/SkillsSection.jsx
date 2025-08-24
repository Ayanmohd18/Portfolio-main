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
      { name: "LangChain", logo: "https://lobe-assets.vercel.app/ai/langchain/combine/color/1f1f1f/1a1a1a/1.svg", brandColor: "#4e9a3c" },
      { name: "LangGraph", logo: "https://lobe-assets.vercel.app/ai/langgraph/combine/color/1f1f1f/1a1a1a/1.svg", brandColor: "#ff5722" },
      { name: "LlamaIndex", logo: "https://lobe-assets.vercel.app/ai/llamaindex/combine/color/1f1f1f/1a1a1a/1.svg", brandColor: "#6c5ce7" },
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