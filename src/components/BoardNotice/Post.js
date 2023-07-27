import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const PostBox = styled.div`
    padding-left: 10px;
    padding-right: 5px;
    margin: 26px 5vw 0px 22vw;
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

const Post =() =>{

    return (
        <>
           <Container>
                <PostBox>
                    <PostTitle>서비스 업데이트 공지입니다.</PostTitle>
                    <PostDate>2023-07-07</PostDate>
                </PostBox>
           </Container>
        </>
    )

}

export default Post;