import React from "react";
import styled from 'styled-components';
import BoardTitle from "../components/common/BoardTitle";
import Post from "../components/BoardFree/Post";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Button = styled.button`
    width: fit-content;
    padding: 5px 40px;
    border-radius: 5px;
    background: #3E8DF4;
    color: white;
    border: none;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 40px;
`;

const BoardFree =({navigation})=>{

    const navigate = useNavigate();
    const navigateToWrite = () => {
        navigate("/Write");
    };

    return (
        <>
        <Container>
          <BoardTitle text={"🙃 자유 게시판"}/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Button onClick={navigateToWrite}>글쓰기</Button>
        </Container>
        </>
    )
}

export default BoardFree;