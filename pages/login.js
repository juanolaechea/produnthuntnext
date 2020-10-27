import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import firebase from "../firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Encabesado = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

export default function Login() {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      const usuario = await firebase.iniciarSesion(email, password);
      console.log(usuario);
      Router.push('/');
    } catch (error) {
      console.error("Hubo un error al autenticar el usuario", error.message);
      guardarError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <Encabesado>Iniciar Sesión</Encabesado>
        <Formulario onSubmit={handleSubmit}>
          <Campo>
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email..."
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.email && <Error>{errores.email}</Error>}

          <Campo>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              placeholder="Tu Password..."
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>

          {errores.password && <Error>{errores.password}</Error>}
          {error && <Error> {error} </Error>}

          <InputSubmit type="submit" value="Iniciar Sesión" />
        </Formulario>
      </Layout>
    </div>
  );
}
