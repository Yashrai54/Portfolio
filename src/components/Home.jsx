import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Sparkles, ArrowRight, Star, ChevronLeft, ChevronRight, Trophy, Users, Coffee, Zap } from 'lucide-react';

export default function EnhancedHomepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack shopping experience with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Web App"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      category: "SaaS"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio with interactive elements and animations",
      tech: ["React", "CSS", "Framer Motion"],
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      category: "Design"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with maps",
      tech: ["JavaScript", "API", "Chart.js"],
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      category: "Dashboard"
    }
  ];

  const skills = [
    { name: "React", level: 90, icon: Code2, color: "#61DAFB" },
    { name: "Node.js", level: 85, icon: Database, color: "#68A063" },
    { name: "JavaScript", level: 95, icon: Globe, color: "#F7DF1E" },
    { name: "CSS/Tailwind", level: 88, icon: Sparkles, color: "#38BDF8" },
    { name: "MongoDB", level: 80, icon: Database, color: "#47A248" },
    { name: "Git", level: 85, icon: Code2, color: "#F05032" }
  ];

  const testimonials = [
    {
      text: "Outstanding work! Delivered beyond expectations with excellent communication throughout the project.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      rating: 5
    },
    {
      text: "A true professional who brings creativity and technical excellence to every project. Highly recommended!",
      author: "Michael Chen",
      role: "CEO at StartupXYZ",
      rating: 5
    },
    {
      text: "Exceptional problem-solving skills and attention to detail. Made our vision come to life perfectly.",
      author: "Emily Rodriguez",
      role: "Creative Director",
      rating: 5
    }
  ];

  const stats = [
    { icon: Trophy, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Zap, value: "3+", label: "Years Experience" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #0F172B, #1E293B, #0F172B)',
      minHeight: '100vh',
      fontFamily: "'Fira Code', monospace"
    }}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-12px);
        }

        .skill-bar {
          transition: width 1s ease-out;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 2rem 1rem !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section" style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(67, 217, 173, 0.1), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transform: `translateY(${scrollY * 0.3}px)`
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 184, 106, 0.08), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transform: `translateY(${scrollY * -0.2}px)`
        }} />

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.5rem',
            background: 'rgba(67, 217, 173, 0.1)',
            border: '1px solid rgba(67, 217, 173, 0.3)',
            borderRadius: '50px',
            marginBottom: '2rem',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <Sparkles size={18} color="#43D9AD" />
            <span style={{ color: '#43D9AD', fontSize: '0.95rem', fontWeight: '600' }}>
              Welcome to my portfolio
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '800',
            color: 'white',
            margin: '0 0 1.5rem 0',
            lineHeight: '1.2',
            animation: 'fadeInUp 1s ease-out'
          }}>
            My Name is <br />
            <span style={{
              background: 'linear-gradient(135deg, #43D9AD 0%, #4facfe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
             Yash Rai
            </span> 
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: '#90A1B9',
            marginBottom: '2.5rem',
            lineHeight: '1.8',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Full-Stack Developer specializing in modern web technologies.
            <br />
            Turning ideas into elegant, scalable solutions.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.4s ease-out'
          }}>
            <a href="/projects" style={{textDecoration:"none"}}>
              <button style={{
              padding: '1rem 2.5rem',
              background: '#43D9AD',
              color: '#0F172B',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              fontFamily: "'Fira Code', monospace"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 30px rgba(67, 217, 173, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              View Projects <ArrowRight size={20} />
            </button>
            </a>
            
            <a href="/contacts" style={{textDecoration:"none"}}>
              <button style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: '#90A1B9',
              border: '2px solid #314158',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: "'Fira Code', monospace"
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#43D9AD';
              e.target.style.color = '#43D9AD';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#314158';
              e.target.style.color = '#90A1B9';
            }}>
              Get In Touch
            </button>
            </a>
            
          </div>
        </div>
      </section>

    </div>
  );
}