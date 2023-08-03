import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const PostBox = styled.div`
    padding-left: 10px;
    padding-right: 5px;
    border-bottom: solid 2px #bdbdbd;
`;
const PostTitle = styled.div`
    text-align: left;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const PostDate = styled.div`
    text-align: end;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
`;

const Comments =({data}) =>{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("../localhost:3000/BoardNotice")
    })
    
    const post = data.map((posting) =>
        <PostBox>
            <PostTitle>{posting.content}</PostTitle>
            <PostDate>{posting.date}</PostDate>
        </PostBox>
    );

    return (
        <>
           <Container>
                {post}
           </Container>
        </>
    )

}

export default Comments;