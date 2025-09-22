
const BASE_URL = "http://localhost:4003"; 

export const TodoApi ={
  getTaches : async () => {
    const accessToken = localStorage.getItem('accessToken')
  try {

    const response = await fetch(`${BASE_URL}/taches`,
        {
            method: 'GET',
            headers:{'Authorization': `Bearer ${accessToken}`}
        });
    if (!response.ok) throw new Error("Erreur lors du fetch des tâches");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
 },

  getOneTache : async (id) => {
    const accessToken = localStorage.getItem('accessToken')

  try {
    const response = await fetch(`${BASE_URL}/taches/${id}`,
        {
            method: 'GET',
            headers:{'Authorization': `Bearer ${accessToken}`}
        });
    if (!response.ok) throw new Error("Erreur lors du fetch des tâches");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
 },

  addTache : async (tache) => {
    const accessToken = localStorage.getItem('accessToken')

  try {
    const response = await fetch(`${BASE_URL}/taches`, {
      method: "POST",
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${accessToken}` },
      body: JSON.stringify(tache),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
 },

  updateTache : async (id, updates) => {
    const accessToken = localStorage.getItem('accessToken')

  try {
    const response = await fetch(`${BASE_URL}/taches/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${accessToken}` },
      body: JSON.stringify(updates),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
 },

  deleteTache : async (id) => {
    const accessToken = localStorage.getItem('accessToken')

  try {
    await fetch(`${BASE_URL}/taches/${id}`, { method: "DELETE", headers: {'Authorization': `Bearer ${accessToken}` }});
  } catch (error) {
    console.error(error);
    throw error;
  }
 },

 loginUser : async (login, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
    
    const data = await response.json()
    
    if (!data.error) {
     localStorage.setItem('accessToken', data.tokens.accessToken)
     return true
    }else{
        return false;
    }

  } catch (error) {
    console.error("Erreur API:", error);
    return { error: "Impossible de contacter le serveur" };
  }
 },
  createUser: async (userData) => {
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
      return res.ok;
    } catch (err) {
      console.error("Erreur inscription:", err);
      return false;
    }
  }

}