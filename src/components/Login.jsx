import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import SetTitle from "../hook/SetTitle";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter username and password");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/login", { username, password });
      localStorage.setItem("token", data.token);
      toast.success(`Welcome, ${data.user.username}!`);
      // Redirect or update app state here
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex mt-20 items-center flex-col gap-10">
      <SetTitle title="Se connecter - Allamo Institute Management" />
      <img src="/assets/imgs/allamo-institut-logo.png" className="w-60" alt="" />
      <form onSubmit={handleLogin} className="w-120 border border-slate-300 rounded-2xl mx-auto shadow-sm shadow-black/20 px-10 py-10">
        <h1 className="text-center lg:text-xl md:text-lg text-base first-letter:capitalize font-bold mb-10">connectez-vous à votre compte</h1>
        <div className="grid gap-2 mb-7">
          <label htmlFor="username" className="font-medium first-letter:capitalize text-gray-500">Nom d'utilisateur</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-lg outline-none border-2 border-slate-300"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password" className="font-medium first-letter:capitalize text-gray-500">Mot de passe</label>
          <div className="flex items-center relative">
            <input
              type={`${isPasswordVisible ? "text" : "password"}`}
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-lg outline-none border-2 border-slate-300"
            />
            <button onClick={(e) => { e.preventDefault(); setIsPasswordVisible(!isPasswordVisible) }} className="absolute right-3">
              {
                isPasswordVisible ?
                  <EyeOffIcon />
                  :
                  <EyeIcon />
              }
            </button>
          </div>
        </div>
        <button disabled={loading} type="submit" className="w-full mt-10 bg-blue-800 text-white py-2.5 rounded-lg hover:bg-blue-800/90 cursor-pointer disabled:cursor-not-allowed transition-colors disabled:bg-blue-800/70 flex items-center justify-center first-letter:capitalize">
          {loading ? <Loader2 className="animate-spin" /> : "Se connecter"}
        </button>
      </form>
    </main >
  );
}
