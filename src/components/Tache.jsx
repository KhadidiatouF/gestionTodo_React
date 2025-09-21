
import { Plus, Search, Filter, Calendar, Clock, User, MoreVertical, Edit3, Trash2, Eye, CheckSquare, User2, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import FormTache from './Formulaire';
import Modal from './Modal';
import { TodoApi } from '../api/api';

export default function Taches() {
 
  const [taches, setTaches] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {""
  //   fetch('http://localhost:3001/taches')
  //     .then((res) => res.json())
  //     .then((data) => setTaches(data))
  //     .catch((err) => console.error(err));
  // }, []);


   useEffect(() => {
    const fetchTaches = async () => {
      try {
        const data = await TodoApi.getTaches(); // 🔹 appelle l’API
        setTaches(data.taches);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTaches();
  }, []);

  const onDelete = async (id)=>{

     await TodoApi.deleteTache(id);
   
      setTaches(prev=> prev.filter(t=> t.id !== id))
    
    
  }

  const getStatusColor = (statut) => {
    switch(statut) {
      case 'TERMINER': return 'bg-green-100 text-green-800 border-green-200';
      case 'EN_COURS': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'A_FAIRE': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (statut) => {
    switch(statut) {
      case 'TERMINER': return 'Terminé';
      case 'EN_COURS': return 'En cours';
      case 'A_FAIRE': return 'A faire';
      default: return 'Inconnu';
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

       {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo et nom de l'app */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-950 p-2 rounded-xl">
                <CheckSquare size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TACHES</h1>
                <p className="text-xs text-gray-500">Gestionnaire de tâches</p>
              </div>
            </div>

            {/* Bouton de déconnexion */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User2 size={16} />
                </div>
                <span>Utilisateur</span>
              </div>
              <button className="flex items-center gap-2 text-red-600 hover:text-red-200 hover:bg-red-500 px-3 py-2 rounded-lg transition-colors">
                <LogOut size={18} />
                <span className="text-sm font-medium">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content Wrapper */}
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestionnaire de Tâches</h1>
              <p className="text-gray-600">Organisez et suivez vos projets efficacement</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
                <Filter size={18} />
                Filtres
              </button>
                <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-950 font-extrabold text-white px-6 py-2 rounded-xl hover:from-blue-900 hover:to-blue-900 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Plus size={18} />
              Nouvelle Tâche
            </button>
          </div>
         </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <FormTache taches={taches} setIsModalOpen ={setIsModalOpen}/>
          </Modal>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1">
            <div className="flex items-center gap-3 px-4 py-3">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Rechercher une tâche..."
                className="flex-1 border-none outline-none text-gray-700 placeholder-gray-400"
              />
              <div className="flex gap-2">
                <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600 outline-none">
                  <option>Tous les statuts</option>
                  <option>En attente</option>
                  <option>En cours</option>
                  <option>Terminé</option>
                </select>
                {/* <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600 outline-none">
                  <option>Toutes priorités</option>
                  <option>Haute</option>
                  <option>Moyenne</option>
                  <option>Basse</option>
                </select> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Liste des tâches */}
          <div className="flex-1 lg:flex-grow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900">Mes Tâches</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{taches.length} tâches</span>
                <span>•</span>
                <span>{taches.filter(t => t.statut === 'TERMINER').length} terminées</span>
              </div>
            </div>

            {/* Stats rapides */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-lg flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white  text-sm font-extrabold">En cours</p>
                    <p className="text-2xl font-bold">{taches.filter(t => t.statut === 'EN_COURS').length}</p>
                  </div>
                  <div className="bg-orange-400 p-3 rounded-xl">
                    <Clock size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-lg flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white  text-sm font-extrabold">Terminées</p>
                    <p className="text-2xl font-bold">{taches.filter(t => t.statut === 'TERMINER').length}</p>
                  </div>
                  <div className="bg-green-600 p-3 rounded-xl">
                    <Calendar size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-lg flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-extrabold">A faire</p>
                    <p className="text-2xl font-bold">{taches.filter(t => t.statut === 'A_FAIRE').length}</p>
                  </div>
                  <div className="bg-red-600 p-3 rounded-xl">
                    <User size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-8 ">
              {taches.map((task) => (
                <div key={task.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* <div className={`w-1 h-16 rounded-full ${getPriorityColor(task.priorite)}`}></div> */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{task.titre}</h3>
                        <div className="mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(task.statut)}`}>
                            {getStatusLabel(task.statut)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{task.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                                <img  className='flex justify-start w-[10rem]' src="src/assets/to.png" alt="" />
                                {/* <img  className=' flex justify-end w-[10rem]' src="src/assets/todo.png" alt="" /> */}
                         
                            {/* <span>{task.dateCreation}</span> */}
                          </div>
                          {/* <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>Priorité {task.priorite}</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:text-indigo-400 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-orange-600 hover:text-orange-400 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit3 size={16} />
                      </button>
                      <button onClick={()=>onDelete(task.id)} className="p-2 text-red-600 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Progression de la tâche</span>
                      <span>{task.statut === 'termine' ? '100%' : task.statut === 'en_cours' ? '60%' : '0%'}</span>
                    </div>
                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          task.statut === 'termine' ? 'bg-green-500 w-full' : 
                          task.statut === 'en_cours' ? 'bg-blue-500 w-3/5' : 
                          'bg-gray-300 w-0'
                        }`}
                      ></div>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
