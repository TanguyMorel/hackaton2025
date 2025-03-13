import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [query, setQuery] = useState(""); // Gestion de l'état pour la recherche

  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "black" }}>
      <input 
        type="text" 
        placeholder="Rechercher..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} // Mise à jour de l'état à chaque changement
        style={{ padding: "10px", flex: 1 }}
      />
      <Link to={`/all?search=${query}`}>Tout</Link>  {/* Passer la recherche dans l'URL */}
      <Link to={`/users?search=${query}`}>Utilisateurs</Link>  {/* Passer la recherche dans l'URL */}
    </nav>
  );
}

export default Navbar;
