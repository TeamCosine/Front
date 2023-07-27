import React from "react";
import styled from 'styled-components';
import BoardTitle from "../components/common/BoardTitle";
import Post from "../components/BoardNotice/Post";
import { useNavigate } from "react-router-dom";
import TopPost from "../components/BoardNotice/TopPost";

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

const BoardNotice =({navigation})=>{

    const navigate = useNavigate();
    const navigateToWrite = () => {
        navigate("/Write");
    };

    return (
        <>
        <Container>
          <BoardTitle text={"🚀 공지사항"}/>
            <TopPost/>
            <TopPost/>
            <TopPost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Container>
        </>
    )
}

export default BoardNotice;