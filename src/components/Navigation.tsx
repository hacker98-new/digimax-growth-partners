import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const Navigation = ({ onLoginClick, onRegisterClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              DigiMax
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Layanan
            </a>
            <a href="#charts" className="text-foreground hover:text-primary transition-colors">
              Market
            </a>
            <a href="#referral" className="text-foreground hover:text-primary transition-colors">
              Referral
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={onLoginClick}>
              Masuk
            </Button>
            <Button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary shadow-lg"
            >
              Daftar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Layanan
              </a>
              <a href="#charts" className="text-foreground hover:text-primary transition-colors">
                Market
              </a>
              <a href="#referral" className="text-foreground hover:text-primary transition-colors">
                Referral
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Tentang
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" onClick={onLoginClick}>
                  Masuk
                </Button>
                <Button 
                  onClick={onRegisterClick}
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
                >
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};