import React from 'react';
import styled from '@emotion/styled';
import { css} from '@emotion/core';


const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem; 
    min-width: 300px;
`;
const InputSubmit = styled.button`
    height: 3rem;
    width: 4rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: relative;
    left: 30rem;
    top:-4rem;
    background-color: white;
    border: none;
    text-indent: -9999px;
    &:hover {
        cursor: pointer;
    }
`;

const Buscar = () => {

    


    return ( 
        <form
            css={css`
                position: relative;
            `}
            
        >
        
            
            <InputText 
                type="text" 
                placeholder="Buscar productos"
            />
            
            <InputSubmit type = "submit" > Buscar </InputSubmit>
        </form>
     );
}
 
export default Buscar;