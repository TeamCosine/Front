import React from "react";
import styled from "styled-components";
import {ReactComponent as Main} from "../assets/common/Mainicon.svg";

const Loading = () =>{
    const Logo = styled(Main)`
    
    justify-content: center;
    align-self: center;

        
    `;
    
    return (
        <>
        <Logo />
         잠시만 기다려 주세요. 곧 시작합니다!
        </>

    )

}

export default Loading;