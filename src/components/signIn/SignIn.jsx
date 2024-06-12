import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChatsTeardrop } from "phosphor-react";
import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const signup = async (userData) => {
    const response = await api.post("/users", userData);
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signup({
        email,
        password,
        username,
        fullName,
        imageUrl,
      });
      console.log(user);
    } catch (err) {
      alert("Error signing up");
    }
  };

  return (
    <>
      <div className="signin-container">
        <div className="signin-heading">
          <ChatsTeardrop className="signin-logo" />
          <h2 className="signin-title">ForunTalk</h2>
        </div>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-section">
          <h2 className="signin-section-title">Informações Pessoais</h2>

          <div className="form-info">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="signin-input-label">
                Nome Completo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="signin-input-label">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="signin-input-label">
                Nome de usuário
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="signin-input-label">
                Senha
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Sobre
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder="Escreva sobre você"
                  className="signin-about-textarea"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="signin-input-label">
                Photo
              </label>
              <div className="mt-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Image URL"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="signin-buttons">
          <button type="button" className="signin-cancel-button">
            Cancel
          </button>
          <button type="submit" className="signin-save-button">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
