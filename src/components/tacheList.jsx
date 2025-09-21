import React from 'react'

import { useEffect, useState } from "react";
import { TodoApi } from "../api/api";

export default function TacheList() {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const fetchTaches = async () => {
      const data = await TodoApi.getTaches();
      setTaches(data);
    };
    fetchTaches();
  }, []);

  return (
    <ul>
      {taches.map((t) => (
        <li key={t.id}>{t.titre}</li>
      ))}
    </ul>
  );
}
