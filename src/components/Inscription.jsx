import { useState } from 'react';
import { CheckSquare, Mail, Lock, Eye, EyeOff, UserPlus, LogIn, SquareKanban } from 'lucide-react';
import { TodoApi } from '../api/api';

export default function Inscription({setIsLogged}) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({nom:'', prenom:'', login: '', password: ''});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   let ok = false;

//   if (isLogin) {
//     ok = await TodoApi.loginUser(formData.login, formData.password);
//   } else {
//     ok = await TodoApi.createUser(formData); 
//   }

//   if (ok) {
//     setRoute(true);
//   }
// };


const handleSubmit = async (e) => {
  e.preventDefault();

  let ok = false;

  if (isLogin) {
    // Cas connexion
    ok = await TodoApi.loginUser(formData.login, formData.password);
    if (ok) {
      setIsLogged(true); // On va dans Taches
    }
  } else {
    // Cas inscription
    console.log("Données envoyées :", formData);

    ok = await TodoApi.createUser(formData);
    if (ok) {
      alert("Inscription réussie, veuillez vous connecter !");
      setIsLogin(true); // On revient sur la page de connexion
    }
  }
};

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const ok = await TodoApi.loginUser(formData.login, formData.password)
    
//     if (ok) {
//         setRoute(true)
//     }
    
//   };

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
          <p className="text-gray-600">
            {isLogin ? 'Connectez-vous à votre compte' : 'Créez votre compte'}
          </p>
        </div>

        {/* Formulaire de connexion/inscription */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          
          {/* Basculer entre connexion et inscription */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                isLogin 
                  ? 'bg-white text-blue-950 shadow-sm' 
                  : 'text-blue-950 hover:text-gray-800'
              }`}
            >
              <LogIn size={16} className="inline mr-2" />
              Connexion
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                !isLogin 
                  ? 'bg-white text-blue-950 shadow-sm' 
                  : 'text-blue-950 hover:text-gray-800'
              }`}
            >
              <UserPlus size={16} className="inline mr-2" />
              Inscription
            </button>
          </div>

         <form onSubmit={handleSubmit} className="space-y-5">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-5">
        
            {/* Nom (uniquement pour inscription) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-extrabold text-black mb-2">
                  Nom
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Entrez votre nom complet"
                    className="w-full px-4 py-3 pl-4 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors"
                    required={!isLogin}
                  />
                </div>

                <label className="block text-sm font-extrabold text-black mb-2">
                  Prenom
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder="Entrez votre nom complet"
                    className="w-full px-4 py-3 pl-4 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors"
                    required={!isLogin}
                  />
                </div>
              </div>
              
            )}

         
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
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors"
                  required
                />
                <Mail size={20} className="absolute left-4 top-3.5 text-gray-400" />
              </div>
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
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors"
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
              className="w-full bg-blue-950 text-white py-3 rounded-xl hover:from-blue-950 hover:to-blue-950 transition-all transform hover:scale-[1.02] font-medium shadow-lg"
            >
              {isLogin ? 'Se connecter' : "S'inscrire"}
            </button>

          </div>
        </form>

        </div>


      </div>
    </div>
  );
}