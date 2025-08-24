import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className={`md:w-1/2 w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="relative">
            <img 
              src="https://customer-assets.emergentagent.com/job_tech-portfolio-74/artifacts/ghfq15rz_image.png" 
              alt="Ayan Mohamed" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
          </div>
        </div>
        <div className={`md:w-1/2 w-full transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <h2 className="text-5xl font-bold text-stone-800 mb-6 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            I'm Ayan Mohamed, an AI innovator crafting intelligent, user-centric solutions that merge cutting-edge technology with real-world impact. My expertise spans machine learning, deep learning, computer vision, and natural language processing, enabling me to transform complex data into actionable insights and powerful products.
          </p>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            I create scalable, high-performance systems that deliver precision, efficiency, and exceptional user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;