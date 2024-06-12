import React, { useState } from "react";
import { ChatsTeardrop } from "phosphor-react";
import axios from "axios";
import { useAuth } from "../../auth/AuthProvider";
import { useNavigate } from 'react-router-dom';


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    navigate('/dashboard'); 
  };


  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const loginUser = async (email, password) => {
    const response = await api.get("/users", {
      params: { email, password },
    });
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      login(user); // Log in the user
      redirectToDashboard();
    } catch (err) {
      throw err;
    }
  };

  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <ChatsTeardrop className="mx-auto h-24 w-auto" />
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            ForunTalk
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white-500">
            Ainda não é membro?{" "}
            <a
              href="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Crie sua conta
            </a>
            <span> ou </span>
            <a
              href="/dashboard"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Entrar sem login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
