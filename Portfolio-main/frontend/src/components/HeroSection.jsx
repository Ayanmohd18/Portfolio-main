import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Turning vision into intelligent AI solutions that redefine possibilities.";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect for subheading - starts after main heading animation completes
  useEffect(() => {
    if (isVisible) {
      // Delay the typewriter to start after the main heading animation completes
      const startDelay = setTimeout(() => {
        let index = 0;
        const timer = setInterval(() => {
          if (index < fullText.length) {
            setTypewriterText(fullText.slice(0, index + 1));
            index++;
          } else {
            clearInterval(timer);
          }
        }, 40); // Slightly faster typing

        return () => clearInterval(timer);
      }, 1200); // Start typewriter after main heading completes

      return () => clearTimeout(startDelay);
    }
  }, [isVisible, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 overflow-hidden"
    >
      {/* Enhanced animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-stone-300/15 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-400/10 rounded-full blur-3xl float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-stone-200/20 rounded-full blur-3xl float"></div>
        <div className="absolute top-10 right-1/3 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl float-delay"></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-purple-300/8 rounded-full blur-2xl float"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div
          className={`illiyin-transition reveal-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-stone-800 mb-8 tracking-tight text-reveal animate gradient-text">
            I'M AYAN MOHAMED
          </h1>
          
          <div
            className={`illiyin-transition reveal-scale stagger-2 ${
              isVisible ? "visible" : ""
            }`}
          >
            <p className="text-lg md:text-xl text-stone-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light min-h-[3rem] flex items-center justify-center">
              <span className="text-center">
                {typewriterText}
                {typewriterText.length < fullText.length && (
                  <span className="animate-pulse text-stone-800 font-bold ml-1">|</span>
                )}
              </span>
            </p>
          </div>

          <div
            className={`illiyin-transition reveal-up stagger-3 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 text-lg font-medium rounded-lg illiyin-button magnetic shadow-lg hover:shadow-xl"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute -top-20 -left-20 w-2 h-2 bg-stone-400 rounded-full opacity-60 float"></div>
        <div className="absolute -top-10 right-20 w-1 h-1 bg-stone-500 rounded-full opacity-40 float-delay"></div>
        <div className="absolute -bottom-10 -right-10 w-3 h-3 bg-stone-300 rounded-full opacity-50 float"></div>
        <div className="absolute bottom-32 left-10 w-1 h-1 bg-stone-600 rounded-full opacity-30 float-delay"></div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-stone-600 hover:text-stone-800 illiyin-transition magnetic group"
        >
          <div className="flex flex-col items-center">
            <ChevronDown size={32} className="animate-bounce group-hover:animate-pulse" />
            <span className="text-xs mt-2 opacity-60 group-hover:opacity-100 illiyin-transition">Scroll</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;