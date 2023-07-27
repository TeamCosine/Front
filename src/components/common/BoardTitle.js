import React from "react";
import styled from 'styled-components';

const Title = styled.div`
    margin-top : 15vh;
    background-color: #e8f1fd;
    border-radius: 15px;
    width: fit-content;
    font-weight : 800;
    margin-bottom: 3vh;
    font-size: 20px;
    margin-left : 22vw;
    padding: 10px 20px;
`;

const BoardTitle =({text}) =>{
    return <Title>{text}</Title>;
};

export default BoardTitle;