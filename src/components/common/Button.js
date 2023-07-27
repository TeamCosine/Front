import React from "react";
import styled from 'styled-components';
import ColorCode from "../../utils/Palette";

const ButtonMain = styled.button`
`;
const Button1 = styled.button``;


const Button =({type , text, click}) =>{
    return type === "1" ?(
        <ButtonMain bgColor = {ColorCode.MainBlue} onClick = {click}>
            {text}
        </ButtonMain>

    ) : type === "2" ?(
        <Button1 bgColor = {ColorCode.Pink} onClick = {click}>
            {text}
        </Button1>

    ) :null;

};

export default Button;