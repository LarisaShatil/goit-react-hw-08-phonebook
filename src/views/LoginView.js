import React from "react";
import { Helmet } from 'react-helmet';

import LogInForm from "../components/LogInForm/LogInForm";

export default function LoginView() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogInForm />
    </div>
  );
};