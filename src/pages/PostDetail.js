import React from "react";
import styled from 'styled-components';
import {ReactComponent as hearticon} from '../assets/PostDetail/fillHeart.svg';
import Comments from "../components/PostDetail/Comments";
import DummyData from "../utils/DummyData";

const PostContainer = styled.div`
    margin-top: 13vh;
    margin-left: 20vw;
    margin-right: 20vw;
    text-align: left;
`;
const TitleBox = styled.div`
    margin-right: 2vw;
    width: 60vw;
    border-bottom: solid 1px;
`;
const BoardText = styled.div`
    width: 60vw;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 5px;
`;
const Title = styled.div`
    width: 40vw;
    display: inline-block;
    color: #006FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;
const Edit = styled.div`
    text-align: right;
    width: 20vw;
    display: inline-block;
`;
const EditText = styled.span`
    margin-right: 20px;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const ContentBox = styled.div`
    width: 60vw;
    margin: 20px;
    min-height: 30vh;
`;
const Heart = styled.div`
    width: 7vw;
    margin-left: 27vw;
    text-align: center;
`;
const HeartIcon = styled(hearticon)`
`;
const PrevBtn = styled.button`
    text-align: left;
    width: 9vw;
    margin-right: 19.9vw;
    border: none;
    background-color: transparent;
`;
const NextBtn = styled.button`
    text-align: right;
    width: 9vw;
    margin-left: 19.9vw;
    border: none;
    background-color: transparent;
`;
const CommentBox = styled.div`
`;
const Input = styled.div`
    width: 60vw;
    text-align: center;
`;
const InputComment = styled.input`
    margin-top: 20px;
    width: 52vw;
    border: solid 0.1 grey;
`;
const InputButton = styled.button`
    margin-left: 5px;
    width: 5vw;
    border: none;
`;

const PostDetail =() =>{
    return (
        <>
            <PostContainer>
                <TitleBox>
                    <BoardText>{"자유게시판"}</BoardText>
                    <Title>{"제목~~~~~~"}</Title>
                    <Edit>
                        <EditText>수정</EditText>
                        <EditText>삭제</EditText>
                    </Edit>
                </TitleBox>
                <ContentBox>{"내용입니다~~~"}</ContentBox>
                <Heart>
                    <HeartIcon/>{300}
                </Heart>
                <PrevBtn>{"< 이전글"}</PrevBtn>
                <NextBtn>{"다음글 >"}</NextBtn>
                <CommentBox>
                    <Input>
                        <InputComment/><InputButton>작성</InputButton>
                    </Input>
                    <Comments data={DummyData.posts}/>
                </CommentBox>
            </PostContainer>
        </>
    )
}

export default PostDetail;