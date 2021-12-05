import React, {useContext} from "react";

import {Context} from "../context";

import { useRouter } from "next/router";

import axios from "axios";


export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault();

    if(username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "c1cef38e-f3a5-4ebf-9884-49a61d409adc" } }
      )
      .then((r) => router.push("/chats"));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>
          <div className="input-character">
            <input
              placeholder="Email/Username"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
            <button type="submit" className="submit-button">
              Login / Sign Up
            </button>
          </div>

        </form>

      </div>
    </div>
    
  )
}
