import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Ranking() {
  const [user, setUser] = useState([]);
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const getRankings = async () => {
    const response = await api.get("/rankings");
    setUser(response.data);
  };

  useEffect(() => {
    getRankings();
  }, []);

  return (
    <ul role="list" className="ranking-list">
      {user.map((usuario) => (
        <li key={usuario.email} className="ranking-item">
          <div className="user-info">
            <img className="user-avatar" src={usuario.imageUrl} alt="" />
            <div className="user-details">
              <p className="user-name">{usuario.name}</p>
              <p className="user-email">{usuario.email}</p>
            </div>
          </div>
          <div className="user-score-container">
            <p className="user-score">{usuario.score} pontos</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
