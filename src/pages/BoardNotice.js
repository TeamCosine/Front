import React, { useState } from "react";
import styled from 'styled-components';
import BoardTitle from "../components/common/BoardTitle";
import Post from "../components/BoardNotice/Post";
import { useNavigate } from "react-router-dom";
import TopPost from "../components/BoardNotice/TopPost";
import DummyData from "../utils/DummyData";
import Pagination from "../components/BoardNotice/Pagination";

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

    const [page, setPage] = useState(1);
    const limit = 5;
    const offset = (page - 1) * limit;

    const postsData = (posts) => {
        if(posts){
            let result = posts.slice(offset, offset + limit);
            return result;
        }
    }

    return (
        <>
        <Container>
          <BoardTitle text={"🚀 공지사항"}/>
            <TopPost/>
            <TopPost/>
            <TopPost/>
            <Post data={postsData(DummyData.posts)}/>
            <Pagination limit={limit} page={page} totalPosts={DummyData.posts.length} setPage={setPage}/>
        </Container>
        </>
    )
}

export default BoardNotice;