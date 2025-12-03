"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  // aqui você vai criar seus states
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')


  const router = useRouter();


  // aqui vai sua função handleLogin
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await axios.post('/api/login', {
            email: email,
            senha: senha
        })

        router.push('/dashboard');

    } catch (error: any) {
        setErro(error.response?.data?.message || "Erro ao fazer login")
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 w-80"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Entrar
        </button>

        {/* Aqui você coloca uma mensagem de erro depois */}
        {erro && <p className="text-red-600">{erro}</p>} 
      </form>
    </div>
  );
}
