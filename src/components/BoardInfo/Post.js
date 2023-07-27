import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const PostBox = styled.div`
    padding-left: 10px;
    padding-right: 5px;
    margin: 40px 5vw 0px 22vw;
    border-bottom: solid 3px #bdbdbd;
`;
const PostTitle = styled.div`
    text-align: left;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 20px;
`;
const PostContent = styled.div`
    text-align: left;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 13px;
`;

const Post =() =>{

    return (
        <>
           <Container>
                <PostBox>
                    <PostTitle>정보를 주세요</PostTitle>
                    <PostContent>정보 공유 게시판입니다~~~~~~ 넘으면 내용 숨겨지도록!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</PostContent>
                </PostBox>
           </Container>
        </>
    )

}

export default Post;