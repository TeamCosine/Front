import React from "react";
import styled from "styled-components";
import {ReactComponent as Main} from "../assets/common/Mainicon.svg";

const Loading = () =>{
    const Container = styled.div`
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       height: 100vh;
       font-size : 24px
    `;
    const Logo = styled(Main)`
    
    width : 800px;
    height: 100px;;

        
    `;
    
    return (
        <Container>
            <Logo />
            <div> 잠시만 기다려 주세요! 곧 시작합니다.</div>
        </Container>

    )

}

export default Loading;