import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const CTA = () => {
  return <section className="py-24 bg-tech-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-ai-glow" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Brain className="w-16 h-16 text-secondary mx-auto mb-6 animate-float" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Experience Jamal's Brain?
        </h2>
        
        <p className="text-xl text-white/80 mb-4">
          Get instant access to world-class sales coaching, available 24/7
        </p>
        
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">Join Elite Sellers Community members who are already using Coach Jamal to close bigger deals faster</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto group" asChild>
            <Link to="/upgrade">
              Start Your First Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outlineLight" size="lg" className="text-lg px-10 py-6 h-auto" asChild>
            <Link to="/upgrade">
              Learn More About Membership
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Instant access for members</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Updated continuously</span>
          </div>
        </div>
      </div>
    </section>;
};