import { Brain } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-navy-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-secondary" />
            <div>
              <h3 className="text-lg font-bold text-white">Coach Jamal</h3>
              <p className="text-sm text-white/60">Your 24/7 Digital Sales Coach</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-sm text-white/70">
            <a href="https://jamalreimer.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Jamal Reimer
            </a>
            <a href="https://www.enterprisesellers.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Elite Sellers Community</a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Jamal Reimer. All rights reserved.</p>
          <p className="mt-2">Powered by Jamal's 20+ years of enterprise sales expertise</p>
        </div>
      </div>
    </footer>;
};