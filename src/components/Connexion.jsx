import { useState } from 'react';
import { CheckSquare, Mail, Lock, Eye, EyeOff, UserPlus, LogIn, SquareActivityIcon, SquareCheck, SquareKanban } from 'lucide-react';
import { TodoApi } from '../api/api';

export default function Connexion({setRoute}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ login: '', password: ''});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await TodoApi.loginUser(formData.login, formData.password)
    
    if (ok) {
        setRoute(true)
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="bg-blue-950 p-3 rounded-2xl">
              <SquareKanban size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-gray-900">Taches</h1>
              <p className="text-gray-600 text-sm">Gestionnaire de tâches</p>
            </div>
          </div>
         
        </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-extrabold text-black  mb-2">
                Login
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="login"
                  onChange={handleInputChange}
                  placeholder="Votre login"
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
                <Mail size={20} className="absolute left-4 top-3.5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-extrabold text-black mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
                <Lock size={20} className="absolute left-4 top-3.5 text-gray-400" />
                <button
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-700 transition-all transform hover:scale-[1.02] font-medium shadow-lg"
            >
              Se connecter
            </button>

          </div>
        </div>
        </form>

      </div>
    </div>
  );
}