import React from "react";
import styled from "styled-components";
import ColorCode from "../../utils/Palette";

const Container = styled.div`
`;
const PostBox = styled.div`
    padding-top: 10px;
    padding-right: 10px;
    margin: 10px 15vw 0px 22vw;
    background-color: ${ColorCode.Pink};
    border-radius: 10px;
`;
const PostTitle = styled.div`
    text-align: left;
    padding-left: 15px;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;
const PostDate = styled.div`
    text-align: end;
    font-size: 10px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    padding-bottom: 5px;
`;

const TopPost =() =>{

    return (
        <>
           <Container>
                <PostBox>
                    <PostTitle>New!! 오류 해결 공지입니다.</PostTitle>
                    <PostDate>2023-07-07</PostDate>
                </PostBox>
           </Container>
        </>
    )

}

export default TopPost;