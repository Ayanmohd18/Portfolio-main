import React, { useEffect, useState } from "react";
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Heart, 
  Dumbbell, 
  Stethoscope,
  Code2,
  Cpu,
  Database,
  BrainCircuit,
  Bot,
  Server,
  Network,
  MessageSquare,
  FileCode2,
  FlaskConical,
  LineChart,
  Braces,
  Terminal,
  Cloud,
  Table2,
  FunctionSquare,
  Mic2
} from "lucide-react";

// Tech stack icons mapping
const techIcons = {
  'Python': <FileCode2 className="w-4 h-4 mr-1" />,
  'TensorFlow/Keras': <BrainCircuit className="w-4 h-4 mr-1" />,
  'MediaPipe': <Cpu className="w-4 h-4 mr-1" />,
  'BlazePose': <Cpu className="w-4 h-4 mr-1" />,
  'OpenCV': <Code2 className="w-4 h-4 mr-1" />,
  'Streamlit': <Terminal className="w-4 h-4 mr-1" />,
  'Pandas': <Table2 className="w-4 h-4 mr-1" />,
  'NumPy': <FunctionSquare className="w-4 h-4 mr-1" />,
  'Scikit-learn': <Brain className="w-4 h-4 mr-1" />,
  'Matplotlib': <LineChart className="w-4 h-4 mr-1" />,
  'Gemini API': <Bot className="w-4 h-4 mr-1" />,
  'Flask': <FlaskConical className="w-4 h-4 mr-1" />,
  'SpeechRecognition': <Mic2 className="w-4 h-4 mr-1" />,
  'gTTS': <MessageSquare className="w-4 h-4 mr-1" />,
  'Seaborn': <LineChart className="w-4 h-4 mr-1" />,
  'OpenAI GPT': <Bot className="w-4 h-4 mr-1" />,
  'Pyttsx3': <MessageSquare className="w-4 h-4 mr-1" />,
  'DeepSeek-R1': <BrainCircuit className="w-4 h-4 mr-1" />,
  'FastAPI': <Server className="w-4 h-4 mr-1" />,
  'MongoDB': <Database className="w-4 h-4 mr-1" />,
  'Hugging Face': <Network className="w-4 h-4 mr-1" />
};
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      icon: Dumbbell,
      title: "Virtual AI Fitness Coach",
      description: [
        "Engineered an AI-powered fitness coach using BiLSTM and MediaPipe BlazePose for precise exercise classification, rep counting, and posture correction",
        "Built a personalized workout and diet planner with adaptive recommendations based on performance, goals, and caloric needs",
        "Integrated AI chatbots for live guidance, motivation, and mental wellness, boosting engagement and retention",
        "Achieved 95%+ accuracy on hybrid datasets with robust performance across varied lighting, camera angles, and body types"
      ],
      techStack: ["Python", "TensorFlow/Keras", "MediaPipe", "BlazePose", "OpenCV", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Gemini API"],
      color: "from-green-500 to-green-600",
      gradient: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: Heart,
      title: "Medical Insurance Premium Prediction Using ML",
      description: [
        "Developed a premium prediction system using ML (Random Forest, Gradient Boosting) trained on health and demographic features",
        "Built interactive Streamlit interface with real-time predictions and data visualizations",
        "Added voice interaction using Flask, SpeechRecognition, and gTTS for accessibility"
      ],
      techStack: ["Python", "Scikit-learn", "Streamlit", "Flask", "SpeechRecognition", "gTTS", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      color: "from-red-500 to-red-600",
      gradient: "bg-gradient-to-br from-red-50 to-red-100",
      github: "https://github.com/Ayanmohd18/MED-INSURANCE",
      demo: null
    },
    {
      icon: Brain,
      title: "MedVoice AI",
      description: [
        "Built a voice-powered virtual health assistant simulating real-time doctor-patient conversations",
        "Integrated OpenAI GPT to respond to medical queries using NLP",
        "Added speech recognition and TTS for hands-free interaction, improving accessibility for elderly/visually impaired"
      ],
      techStack: ["Python", "Streamlit", "Flask", "OpenAI GPT", "SpeechRecognition", "gTTS", "Pyttsx3", "Pandas", "NumPy"],
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
      github: "https://github.com/Ayanmohd18/-MedVoice-AI---Your-Personalized-Voice-Powered-Health-Assistant-",
      demo: null
    },
    {
      icon: Stethoscope,
      title: "Fine-Tuning DeepSeek-R1 for Advanced Medical Reasoning",
      description: [
        "Fine-tuned DeepSeek-R1 LLM for medical diagnosis support, improving contextual accuracy by training on specialized healthcare datasets.",
        "Implemented advanced medical reasoning capabilities through targeted fine-tuning on clinical case studies and medical literature.",
        "Developed a scalable API using FastAPI for seamless integration with healthcare applications."
      ],
      techStack: ["Python", "DeepSeek-R1", "FastAPI", "MongoDB", "Hugging Face", "Pandas", "NumPy"],
      color: "from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
      github: "https://github.com/Ayanmohd18/AI-doctor-Assistant",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-300/5 rounded-full blur-3xl float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-300/5 rounded-full blur-2xl float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`reveal-up ${isVisible ? "visible" : ""}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight gradient-text">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-stone-600 mt-6 max-w-2xl mx-auto">
              Innovative AI solutions that transform ideas into impactful real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className={`reveal-up stagger-${index + 1} ${isVisible ? "visible" : ""}`}
                >
                  <div className={`${project.gradient} rounded-2xl p-8 shadow-lg illiyin-card group relative overflow-hidden`}>
                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 illiyin-transition"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 magnetic shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-stone-900 illiyin-transition">
                        {project.title}
                      </h3>
                      
                      <ul className="space-y-3 mb-6">
                        {project.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-stone-700 flex items-start group-hover:text-stone-800 illiyin-transition">
                            <span className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-stone-500 illiyin-transition"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-stone-800 mb-2">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/70 text-stone-700 text-sm rounded-full border border-stone-200 magnetic hover:bg-white hover:shadow-sm illiyin-transition flex items-center"
                              title={tech}
                            >
                              {techIcons[tech] || <Code2 className="w-4 h-4 mr-1" />}
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-700 bg-white/70 border border-stone-200 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:opacity-90 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        )}
                        {!project.github && !project.demo && (
                          <Button
                            variant="outline"
                            size="sm"
                          >
                            View Project
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Decorative floating elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full opacity-60 float"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/40 rounded-full opacity-40 float-delay"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;