import { useAuth } from "../../auth/AuthProvider";
import "./styles.css";
import React from "react";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p>No user logged in</p>;

  return (
    <div>
      <div className="profile-heading">
        <h3>Informações do Perfil</h3>
      </div>

      <div className="profile-container">
        <div className="profile-image">
          <img
            className="inline-block h-20 w-20 rounded-full ring-2 ring-white md:w-40 md:h-40 lg:w-80 lg:h-40"
            src={user.imageUrl}
            alt="Profile"
          />
        </div>

        <div className="profile-info">
          <dl className="divide-y divide-gray-100">
            <div className="profile-data">
              <dt className="profile-label">Nome completo</dt>
              <dd className="profile-value">{user.fullName}</dd>
            </div>
            <div className="profile-data">
              <dt className="profile-label">Email</dt>
              <dd className="profile-value">{user.email}</dd>
            </div>
            <div className="profile-data">
              <dt className="profile-label">Nome de usuário</dt>
              <dd className="profile-value">{user.username}</dd>
            </div>
            <div className="profile-about">
              <dt className="profile-label">Sobre</dt>
              <dd className="profile-value">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
