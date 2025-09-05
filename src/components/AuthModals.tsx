import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";

interface AuthModalsProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onLoginClose: () => void;
  onRegisterClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

export const AuthModals = ({ 
  isLoginOpen, 
  isRegisterOpen, 
  onLoginClose, 
  onRegisterClose,
  onSwitchToRegister,
  onSwitchToLogin
}: AuthModalsProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    referralCode: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login berhasil! Selamat datang di DigiMax");
    onLoginClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Password tidak cocok!");
      return;
    }
    toast.success("Registrasi berhasil! Silakan login untuk melanjutkan");
    onRegisterClose();
    onSwitchToLogin();
  };

  return (
    <>
      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={onLoginClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Masuk ke DigiMax
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="login-email"
                  type="email"
                  placeholder="nama@email.com"
                  className="pl-10"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password Anda"
                  className="pl-10 pr-10"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
            >
              Masuk
            </Button>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Belum punya akun?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onLoginClose();
                    onSwitchToRegister();
                  }}
                  className="text-primary hover:underline"
                >
                  Daftar sekarang
                </button>
              </span>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Register Modal */}
      <Dialog open={isRegisterOpen} onOpenChange={onRegisterClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Daftar di DigiMax
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="register-name">Nama Lengkap</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="register-name"
                  type="text"
                  placeholder="Nama Lengkap Anda"
                  className="pl-10"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="register-email"
                  type="email"
                  placeholder="nama@email.com"
                  className="pl-10"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password Anda"
                  className="pl-10 pr-10"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-confirm-password">Konfirmasi Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="register-confirm-password"
                  type="password"
                  placeholder="Ulangi Password Anda"
                  className="pl-10"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-referral">Kode Referral (Opsional)</Label>
              <Input
                id="register-referral"
                type="text"
                placeholder="Masukkan kode referral"
                value={registerData.referralCode}
                onChange={(e) => setRegisterData({...registerData, referralCode: e.target.value})}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
            >
              Daftar
            </Button>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Sudah punya akun?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onRegisterClose();
                    onSwitchToLogin();
                  }}
                  className="text-primary hover:underline"
                >
                  Masuk sekarang
                </button>
              </span>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};