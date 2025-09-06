import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import TypewriterEffect from "@/components/TypewriterEffect";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import ConsoleHeader from "@/components/ConsoleHeader";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Download,
  GraduationCap,
  MapPin,
  Calendar,
  ArrowDown,
  Send
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import simranPhoto from "/lovable-uploads/701c7295-ba9f-4042-843f-e36ff7421a55.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const typewriterTexts = [
    "Ethical Hacker",
    "C++ Coder", 
    "Problem Solver",
    "Network Explorer",
    "Quick Learner",
    "Critical Thinker"
  ];

  const skills = [
    { skill: "C++", percentage: 94 },
    { skill: "C Programming", percentage: 90 },
    { skill: "Networking", percentage: 85 },
    { skill: "MySQL", percentage: 80 },
    { skill: "R Programming", percentage: 75 },
    { skill: "Problem Solving", percentage: 95 },
    { skill: "Team Collaboration", percentage: 90 },
    { skill: "Critical Thinking", percentage: 88 }
  ];

  const projects = [
    {
      title: "Student Record Management System",
      description: "Designed to systematically store/manage student details",
      technologies: ["C", "Data Structures", "File Handling"],
      features: [
        "Add, Modify, Delete, and Search records",
        "Optimized data handling algorithms",
        "User-friendly console interface",
        "Structured data storage system"
      ]
    },
    {
      title: "Employee Record System – Staff Registration",
      description: "Console-based system for staff registration & record management",
      technologies: ["C++", "OOP", "File Management"],
      features: [
        "Add, Update, Delete, and Search employee records",
        "Object-oriented design principles",
        "Structured data storage with smooth operation",
        "Error handling and data validation"
      ]
    },
    {
      title: "Wildlife Tracking & Conservation",
      description: "Website to record & manage wildlife tracking & conservation data",
      technologies: ["Web Development", "Database Design", "Conservation Tech"],
      features: [
        "Structured record-keeping for species and habitats",
        "Digital solutions for environmental conservation",
        "Data visualization and reporting",
        "User-friendly web interface"
      ]
    }
  ];
const certifications = [
  {
    title: "Data Science 101",
    issuer: "IBM SkillsBuild",
    link: "/lovable-uploads/12a50b83-ce6b-46ff-a92e-70d9c667c343.png",
    badge: "IBM" as const
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM SkillsBuild", 
    link: "/lovable-uploads/6df9eb8d-2f1f-494a-a1a9-b02a680b81b6.png",
    badge: "IBM" as const
  },
  {
    title: "Certificate in Computer Concepts (CCC)",
    issuer: "NCITTS",
    link: "/lovable-uploads/61a380d3-447f-4be8-805d-30e637217e27.png",
    badge: "NCITTS" as const
  },
  {
    title: "Code-A-Haunt 2.0 Hackathon Participation",
    issuer: "Lovely Professional University",
    link: "/lovable-uploads/715261d0-db10-4e98-af15-db6a8c5645f3.png",
    badge: "LPU" as const
  }
];



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend service
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid scanlines"
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-matrix-green text-xs font-mono animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 20 }, () => 
                String.fromCharCode(33 + Math.random() * 126)
              ).join('')}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="font-orbitron text-4xl md:text-7xl font-bold text-matrix-green mb-6 animate-hologram text-neon">
              SIMRAN ATTRI
            </h1>
            <div className="text-xl md:text-3xl text-neon-cyan font-semibold mb-6 animate-neon-flicker">
              &gt; CYBERSECURITY_ENTHUSIAST | LEARNER | EXPLORER
            </div>
            <p className="text-lg text-hacker-white/80 mb-8 max-w-2xl mx-auto font-mono">
              // Passionate about safeguarding the digital world through curiosity, persistence, and innovation.
            </p>
            
            <div className="text-xl md:text-2xl text-matrix-green mb-12 h-8 font-mono">
              &gt; <TypewriterEffect texts={typewriterTexts} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="font-orbitron text-lg"
              >
                [ VIEW_PROJECTS ]
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="cyber" 
                size="lg"
                onClick={() => scrollToSection('skills')}
                className="font-orbitron text-lg"
              >
                [ EXPLORE_ARSENAL ] &gt;&gt;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 cyber-grid scanlines">
        <div className="container mx-auto px-4">
          <ConsoleHeader>Whoami</ConsoleHeader>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="relative group">
                  <img 
                    src={simranPhoto}
                    alt="Simran Attri - Cybersecurity Enthusiast"
                    className="relative w-48 h-48 rounded-full border-2 border-matrix-green/30 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="text-lg text-hacker-white/90 leading-relaxed font-mono bg-black/40 p-6 border border-matrix-green/30 rounded-lg shadow-cyber">
                <span className="text-matrix-green">&gt;</span> <span className="text-neon-cyan">whoami</span><br/>
                <span className="text-matrix-green animate-data-stream">user:</span> Simran Attri<br/>
                <span className="text-matrix-green animate-data-stream" style={{animationDelay: '0.5s'}}>role:</span> Cybersecurity Enthusiast<br/>
                <span className="text-matrix-green animate-data-stream" style={{animationDelay: '1s'}}>status:</span> B.Sc. Computer Science Student @ LPU<br/>
                <span className="text-matrix-green animate-data-stream" style={{animationDelay: '1.5s'}}>mission:</span> Safeguarding the digital world<br/>
                <span className="text-matrix-green animate-data-stream" style={{animationDelay: '2s'}}>objective:</span> Turn challenges into opportunities<br/>
                <span className="text-neon-cyan">//</span> <span className="text-hacker-white/70">Growth through persistence and innovation</span>
              </div>
              
              <Button 
                variant="danger" 
                className="group font-orbitron"
                onClick={() => window.open('/lovable-uploads/0c88e2d3-b42f-4129-a634-d31fe9cdd985.png', '_blank')}
              >
                <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                [ DOWNLOAD_RESUME.pdf ]
              </Button>
            </div>

            <Card className="bg-gradient-card border border-matrix-green/30 backdrop-blur-sm shadow-cyber animate-hologram">
              <CardHeader className="border-b border-matrix-green/20">
                <CardTitle className="font-orbitron text-matrix-green flex items-center text-neon">
                  <GraduationCap className="mr-2 w-5 h-5 animate-glow-pulse" />
                  [ EDUCATION_LOG ]
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-3 p-4 bg-black/40 border border-electric-blue/30 rounded">
                  <h3 className="font-semibold text-electric-blue font-orbitron">B.Sc. (Hons.) Computer Science (Cybersecurity)</h3>
                  <p className="text-hacker-white/80 flex items-center font-mono">
                    <MapPin className="w-4 h-4 mr-2 text-neon-cyan" />
                    &gt; Lovely Professional University
                  </p>
                  <p className="text-sm text-neon-cyan flex items-center font-mono">
                    <Calendar className="w-4 h-4 mr-2" />
                    status: active // Expected 2027
                  </p>
                </div>
                
                <div className="space-y-3 p-4 bg-black/40 border border-matrix-green/30 rounded">
                  <h3 className="font-semibold text-matrix-green font-orbitron">Intermediate (86%)</h3>
                  <p className="text-hacker-white/80 flex items-center font-mono">
                    <MapPin className="w-4 h-4 mr-2 text-neon-cyan" />
                    &gt; ANS GSS School, Badhera Rajputtan, HP
                  </p>
                  <p className="text-sm text-neon-cyan flex items-center font-mono">
                    <Calendar className="w-4 h-4 mr-2" />
                    completed: March 2023
                  </p>
                </div>

                <div className="space-y-3 p-4 bg-black/40 border border-matrix-green/30 rounded">
                  <h3 className="font-semibold text-matrix-green font-orbitron">Matriculation (86%)</h3>
                  <p className="text-hacker-white/80 flex items-center font-mono">
                    <MapPin className="w-4 h-4 mr-2 text-neon-cyan" />
                    &gt; ANS GSS School, Badhera Rajputtan, HP
                  </p>
                  <p className="text-sm text-neon-cyan flex items-center font-mono">
                    <Calendar className="w-4 h-4 mr-2" />
                    completed: April 2021
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-cyber scanlines">
        <div className="container mx-auto px-4">
          <ConsoleHeader>Arsenal</ConsoleHeader>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black/40 p-6 border border-matrix-green/30 rounded-lg shadow-cyber">
              <h3 className="font-orbitron text-xl text-matrix-green mb-6 text-neon">
                [ TECHNICAL_SKILLS ]
              </h3>
              <div className="space-y-4">
                {skills.slice(0, 5).map((skill, index) => (
                  <SkillBar 
                    key={skill.skill} 
                    skill={skill.skill} 
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-black/40 p-6 border border-electric-blue/30 rounded-lg shadow-neon">
              <h3 className="font-orbitron text-xl text-electric-blue mb-6 text-neon">
                [ SOFT_SKILLS ]
              </h3>
              <div className="space-y-4">
                {skills.slice(5).map((skill, index) => (
                  <SkillBar 
                    key={skill.skill} 
                    skill={skill.skill} 
                    percentage={skill.percentage}
                    delay={(index + 5) * 200}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 cyber-grid scanlines">
        <div className="container mx-auto px-4">
          <ConsoleHeader>What I'm Building</ConsoleHeader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-cyber scanlines">
        <div className="container mx-auto px-4">
          <ConsoleHeader>Certifications</ConsoleHeader>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CertificationCard {...cert} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 cyber-grid">
        <div className="container mx-auto px-4">
          <ConsoleHeader>Contact Protocols</ConsoleHeader>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/40 p-8 border border-matrix-green/30 rounded-lg shadow-cyber">
              <h3 className="font-orbitron text-xl text-matrix-green mb-8 text-center">
                [ ESTABLISH_CONNECTION ]
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="mailto:simranattri2005@gmail.com"
                  className="flex items-center text-hacker-white/80 hover:text-matrix-green transition-all duration-300 group font-mono p-4 bg-black/20 rounded border border-matrix-green/20 hover:border-matrix-green/50"
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:animate-bounce text-neon-cyan" />
                  <div>
                    <div className="text-xs text-matrix-green mb-1">EMAIL</div>
                    <div>simranattri2005@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:+919454931207"
                  className="flex items-center text-hacker-white/80 hover:text-matrix-green transition-all duration-300 group font-mono p-4 bg-black/20 rounded border border-matrix-green/20 hover:border-matrix-green/50"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce text-neon-cyan" />
                  <div>
                    <div className="text-xs text-matrix-green mb-1">MOBILE</div>
                    <div>+91 94549931207</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/simran1526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-hacker-white/80 hover:text-matrix-green transition-all duration-300 group font-mono p-4 bg-black/20 rounded border border-matrix-green/20 hover:border-matrix-green/50"
                >
                  <Github className="w-5 h-5 mr-3 group-hover:animate-bounce text-neon-cyan" />
                  <div>
                    <div className="text-xs text-matrix-green mb-1">GITHUB</div>
                    <div>github.com/simran1526</div>
                  </div>
                </a>
                
                <a 
                  href="http://www.linkedin.com/in/simran-ethicalhacker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-hacker-white/80 hover:text-matrix-green transition-all duration-300 group font-mono p-4 bg-black/20 rounded border border-matrix-green/20 hover:border-matrix-green/50"
                >
                  <Linkedin className="w-5 h-5 mr-3 group-hover:animate-bounce text-neon-cyan" />
                  <div>
                    <div className="text-xs text-matrix-green mb-1">LINKEDIN</div>
                    <div>linkedin.com/in/simran-ethicalhack</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 border-t border-matrix-green/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-hacker-white/80 font-mono">
            <span className="text-neon-cyan">&copy; 2025</span> - 
            <span className="text-matrix-green"> Crafted with ⚡ Cybersecurity Passion by </span>
            <span className="text-matrix-green font-orbitron">SIMRAN_ATTRI</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;