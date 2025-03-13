import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { Link } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
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
            <Link to={`/profile/${user._id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
