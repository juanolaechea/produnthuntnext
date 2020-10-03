import React from "react";

import Link from "next/Link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Buscar from "../iu/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../iu/Boton";

const ContenedorHeader = styled.div`
  max-width: 1500px;
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 800;
  font-family: "Roboto Slab", serif;
  margin-left: 2rem;
  margin-right: -3rem;

  top: 4rem;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const user = false;

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo> P </Logo>
          </Link>
        </div>
        <div>
          <Buscar />
        </div>

        <div>
          <Navegacion />
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                {" "}
                Hola Juan{" "}
              </p>
              <Boton bgColor="true"> Cerrar sesion</Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor="true"> Iniciar secion </Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton> Crear cuenta</Boton>
              </Link>
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
