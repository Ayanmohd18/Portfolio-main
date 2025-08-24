import React, { useEffect, useState } from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
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

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "6366271012",
      href: "tel:6366271012",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Ayanmohd.1eight@gmail.com",
      href: "mailto:Ayanmohd.1eight@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayan-mohamed-ab090026b",
      href: "https://linkedin.com/in/ayan-mohamed-ab090026b",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Ayanmohd18",
      href: "https://github.com/Ayanmohd18",
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
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
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Ready to collaborate on your next AI project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 100} transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-stone-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-stone-800 mb-2 text-center">
                      {contact.label}
                    </h3>
                    
                    <p className="text-stone-600 text-sm text-center break-all">
                      {contact.value}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open('mailto:Ayanmohd.1eight@gmail.com', '_blank')}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-stone-200">
        <div className="text-center">
          <p className="text-stone-500 text-sm">
            © 2025 Ayan Mohamed. Crafted with passion for AI innovation.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;