import React, { useEffect, useState } from "react";
import { Trophy, Users, Zap } from "lucide-react";

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("achievements");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: "Code Neural 2025",
      description: "Participated in State-Level 24-Hour Hackathon; built an AI-powered doctor appointment booking system with user registration, specialization-based search, and online scheduling to improve healthcare access",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Zap,
      title: "Bolt.new Hackathon",
      description: "Represented at World's Largest Hackathon; collaborated globally to prototype AI solutions under time pressure",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 200} transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-stone-800 mb-4">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-stone-600 leading-relaxed">
                      {achievement.description}
                    </p>
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

export default AchievementsSection;