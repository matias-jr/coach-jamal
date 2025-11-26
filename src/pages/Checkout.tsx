import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark to-navy-base">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/upgrade">
          <Button variant="ghost" className="text-white/70 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Button>
        </Link>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/10">
            <h1 className="text-2xl font-bold text-white">Complete Your Purchase</h1>
            <p className="text-white/70 mt-2">Coach Jamal - $19/month</p>
          </div>
          
          <div className="relative w-full" style={{ height: 'calc(100vh - 250px)', minHeight: '600px' }}>
            <iframe
              src="https://link.fastpaydirect.com/payment-link/69275d66d8c1a82841f5bbfc"
              className="w-full h-full"
              title="Checkout"
              style={{ border: 'none' }}
              allow="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
