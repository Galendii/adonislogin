import React, { useState } from "react";

export default function RegistrationForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [access, setAccess] = useState(null);

  const handleSubmit = () => {};

  return (
    <div className="container">
      <div className="text-center">
        <h3>Cadastre-se agora!</h3>
        <p>Faça parte de nossa plataforma! Somos a número 1 do país!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <div className="mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              className="form-control"
              id="email"
              name="email"
              placeholder="Insira seu email..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              name="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="access">Acesso</label>
            <select
              onChange={(e) => setAccess(e.target.value)}
              id="access"
              name="access"
              required
              className="form-control"
            >
              <option disabled selected hidden>
                Selecione...
              </option>
              <option value="999">Administrador</option>
              <option value="1">Comum</option>
            </select>
          </div>
        </div>

        <div className="mx-auto text-center" style={{ maxWidth: 200 }}>
          <button className="btn btn-custom waves-btn waves-effect">
            Entrar!
          </button>
        </div>
      </form>
    </div>
  );
}
