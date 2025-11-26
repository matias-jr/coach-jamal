import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-secondary" />
          <div>
            <h1 className="text-xl font-bold text-white">Coach Jamal</h1>
            <p className="text-xs text-white/60">by Jamal Reimer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#what-it-is" className="text-white/80 hover:text-white transition-colors">
            What It Is
          </a>
          <a href="#benefits" className="text-white/80 hover:text-white transition-colors">
            Benefits
          </a>
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
            How It Works
          </a>
        </nav>

          <Button variant="hero" size="sm" asChild>
            <Link to="/upgrade">
              Get Started
            </Link>
          </Button>
      </div>
    </header>
  );
};