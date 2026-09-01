import React, { useState } from 'react';
import { X, Mail, Lock, User, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSuccess({
        name: name || email.split('@')[0],
        email,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A314C]/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white border border-[#C9E5ED] text-[#1A314C] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        
        {}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#C9E5ED]/30 text-[#5EA4AA] hover:text-[#1A314C] border border-[#C9E5ED] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#107C8E] text-white flex items-center justify-center font-bold shadow-md shadow-[#107C8E]/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1A314C]">Fintech Edge Student Portal</h2>
            <p className="text-xs text-[#10566E]">Access your courses, certificates & mentorship</p>
          </div>
        </div>

        {}
        <div className="flex rounded-xl bg-[#C9E5ED]/20 p-1 mb-6 border border-[#C9E5ED]">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mode === 'login' ? 'bg-[#107C8E] text-white shadow' : 'text-[#10566E] hover:text-[#1A314C]'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mode === 'signup' ? 'bg-[#107C8E] text-white shadow' : 'text-[#10566E] hover:text-[#1A314C]'
            }`}
          >
            Create Account
          </button>
        </div>

        {}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1A314C]">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#5EA4AA] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Raza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#1A314C]">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#5EA4AA] absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#1A314C]">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#5EA4AA] absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#C9E5ED]/15 border border-[#C9E5ED] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#1A314C] placeholder-[#5EA4AA] focus:outline-none focus:border-[#107C8E]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#107C8E] hover:bg-[#10566E] text-white font-extrabold text-xs transition-all shadow-md shadow-[#107C8E]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>{mode === 'login' ? 'Sign In to Portal' : 'Register Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-[#C9E5ED] text-center text-[11px] text-[#5EA4AA]">
          By signing in you agree to Fintech Edge Institute's Terms of Service & Privacy Policy.
        </div>

      </div>
    </div>
  );
};
