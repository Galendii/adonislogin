import React from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
export default function HomePage() {
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-12">
              <LoginForm />
            </div>
            <div className="col-md-6 col-12">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
