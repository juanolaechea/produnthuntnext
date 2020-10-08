import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const Encabesazo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

export default function CrearCuenta() {

  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;
  


  function crearCuenta() {
    console.log("Creando cuenta ");
  }

  return (
    <div>
      <Layout>
        <>
          <Encabesazo>Crear cuenta</Encabesazo>
          <Formulario
          
            onSubmit={handleSubmit}
          
          >
            <Campo>
              <label htmlFor="nombre"> Nombre </label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre..."
                name="nombre"
                value={nombre}
                onChange={handleChange}
              />
            </Campo>

            <Campo>
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email..."
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Campo>

            <Campo>
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password..."
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Campo>
            <InputSubmit type="submit" value="Crear cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}
