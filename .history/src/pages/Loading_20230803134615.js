import React from "react";
import styled from "styled-components";
import {ReactComponent as Main} from "../assets/common/Mainicon.svg";

const Loading = () =>{
    const Logo = styled(Main)`
        
    `;
    
    return (
        <>
        <Logo />
        네트워크 에러가 발생하였습니다! 
        </>

    )

}

export default Loading;