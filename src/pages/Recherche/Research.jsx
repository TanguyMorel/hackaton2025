import { useState, useEffect } from "react";
import Navbar from "../../components/AdvancedSearchMenu"; // Import de la Navbar

export default function AdvancedSearch({ tweets = [], users = [] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let filteredResults = [];
  
    if (filter === "tweets") {
      filteredResults = tweets.filter(t => t.content.toLowerCase().includes(query.toLowerCase()));
    } else if (filter === "hashtags") {
      filteredResults = tweets.filter(t => t.hashtags.some(h => h.toLowerCase().includes(query.toLowerCase())));
    } else if (filter === "users") {
      filteredResults = users.filter(u => u.username.toLowerCase().includes(query.toLowerCase()));
    } else {
      filteredResults = [
        ...tweets.filter(t => t.content.toLowerCase().includes(query.toLowerCase())),
        ...users.filter(u => u.username.toLowerCase().includes(query.toLowerCase()))
      ];
    }
  
    if (sort === "popularity") {
      filteredResults.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else {
      filteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  
    setResults(filteredResults);
  }, [query, filter, sort]); 

  return (
    <div>
      <Navbar /> {/* ✅ Navbar ajoutée ici */}
      
      <div style={{ padding: "20px" }}>
        <h3>Résultats de recherche</h3>
        <div>
          {results.map((item, index) => (
            <div key={index} style={{ padding: "10px", border: "1px solid #ddd", marginBottom: "10px" }}>
              {item.username ? (
                <p><strong>@{item.username}</strong></p>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
