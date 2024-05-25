import './styles.css';
import React from "react";

const usuarios = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      score: 1000,
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      score: 900,
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      score: 800,
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      score: 700,
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      score: 600,
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      score: 500,
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  
  export default function Ranking() {
    return (
      <ul role="list" className="ranking-list">
        {usuarios.map((usuario) => (
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
  