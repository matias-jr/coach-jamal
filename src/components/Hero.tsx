import { Button } from "@/components/ui/button";
import { Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-brain.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Neural Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-base/90 to-navy-dark/95" />
      </div>

      {/* AI Glow Effect */}
      <div className="absolute inset-0 bg-ai-glow animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-white/90">Powered by Jamal Reimer's 20+ Years of Expertise</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Meet <span className="text-secondary">Coach Jamal</span>
          <br />
          Your 24/7 Digital Sales Coach
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto animate-fade-in">
          AI-powered coaching trained on Jamal Reimer's complete library of enterprise sales expertise
        </p>

        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto animate-fade-in">
          Get instant, accurate answers to your toughest sales questions — without waiting for a live session or digging through courses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
            <Link to="/upgrade">
              Start Coaching Now
            </Link>
          </Button>
          <Button variant="outlineLight" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
            <a href="#how-it-works">
              See How It Works
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100+</div>
            <div className="text-white/70">Hours of Training Content</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">$200M+</div>
            <div className="text-white/70">In SaaS Revenue Closed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-white/70">Always Available</div>
          </div>
        </div>
      </div>

      {/* Floating Brain Icon */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <Brain className="w-20 h-20 text-accent/30 animate-float" />
      </div>
    </section>
  );
};