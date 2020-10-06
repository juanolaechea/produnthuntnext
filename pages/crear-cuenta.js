import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

const Encabesazo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;


export default function CrearCuenta() {
  return (
    <div>
      <Layout>
        <>
          <Encabesazo>
            Crear cuenta
          </Encabesazo>
          <Formulario>
            <Campo>
              <label htmlFor="nombre"> Nombre </label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre..."
                name="nombre"
                value=""
              />
            </Campo>

            <Campo>
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email..."
                name="email"
                value=""
              />
            </Campo>

            <Campo>
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password..."
                name="password"
                value=""
              />
            </Campo>
            <InputSubmit type="submit" value="Crear cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}
