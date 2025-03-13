import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { Link } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users"); // Appelle ton backend
        setUsers(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}> 
            <Link to={`/users/${user.id}`}>{user.username}</Link> {/* Lien vers la page de profil */}
          </li>
        ))}
      </ul>
    </div>
  );
}
