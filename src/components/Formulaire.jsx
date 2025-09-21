import React, { useState } from "react";
import { Plus } from "lucide-react";
import { TodoApi } from "../api/api";

export default function FormTache({taches , setIsModalOpen}) {

  const [formData, setFormData] = useState({ titre: '', description: '', statut: 'A_FAIRE'});
 
  const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  
  };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(formData.titre, formData.description, formData.statut);
      
      const ok = await TodoApi.addTache({titre:formData.titre, description:formData.description, statut:formData.statut, userId: 1})
      // console.log(ok);
      
      if (ok) {
          // setRoute(true)
          taches.push({titre:formData.titre, description:formData.description, statut:formData.statut, userId: 1})
          setIsModalOpen(false)
      }
      
  };

  return (
    <div className="">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-950 p-2 rounded-xl">
            <Plus size={20} className="text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Ajouter une Tâche
          </h2>
        </div>

        <div className="flex flex-col space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre de la tâche *
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              name="titre"
              placeholder="Ex: Développer une nouvelle fonctionnalité"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors"
            />
          </div>

          <div>
            <label  className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows="4"
              onChange={handleInputChange}
              name="description"
              placeholder="Décrivez les détails de la tâche..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statut
              </label>
              <select name="statut" onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors">
                <option value="A_FAIRE">A FAIRE</option>
                <option value="EN_COURS">EN COURS</option>
                <option value="TERMINER">TERMINER</option>
              </select>
            </div>

        
          </div>

          {/* Champ Date */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date d'échéance
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div> */}

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-950 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-300 transition-all transform hover:scale-[1.02] font-medium shadow-lg"
          >
            Créer la Tâche
          </button>
        </div>
      </div>
    </div>
  );
}
