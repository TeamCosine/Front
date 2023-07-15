//메인 페이지
import React from "react";
import styled from "styled-components";
import Card from "../components/home/Card";

const Box = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Title = styled.div`
    margin-top: 10vh;
    font-size: 40px;
    text-align: center;
    font-weight: 800;
    display: flex;
    color : #006fff;

`;
const Row = styled.div`
   flex-direction: column;
   display: flex;
   
`;
const Container = styled.div`
   background-color: #D9D9D9;
   border-radius: 15px;
   width : 23%;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`;
const HomeContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin-top: 20px;
   justify-content: center;
   justify-items: center;


`;
const Menu = styled.div``;
const MenuContainer=styled.div`
   display: flex;
   flex-direction: row;
   justify-items: center;
   text-align: center;
`;
const MenuItem = styled.div`
   background-color: #E8F1FD;
   padding-top :2rem;
   padding-bottom : 2rem;
   border-radius: 15px;
   width : 23vh;
   height : 15vh;
   margin-left: 3vh;
   padding-left: 1vw;
   padding-right: 1vw;
`;

const Home = () =>{
    return (
        
        <Box>
            
         
          <Title>이화의 개발자👩‍💻 여러분, 환영합니다👋</Title>
          <HomeContainer>
          <Row>
            <p>🚀 공지사항</p>
            <Container>
                <Card/>
                <Card/>
                <Card/>

            </Container>
          </Row>
          <Row>
            <p>🌈 현재 인기글을 확인하세요!</p>
            <Container>
                <Card />
                <Card />
                <Card />

            </Container>
          </Row>
          </HomeContainer>
          <Menu>
            <p>🤩 흥미로운 게시판을 둘러보세요</p>
            <MenuContainer>
                <MenuItem>
                   <p style={{color :"black", fontSize:"18px", marginBottom:"0.5vh", fontWeight:"bold"}}>💡정보 공유</p>
                   <p style={{fontSize:"15px"}}>개발 지식이나 최신 정보를 공유해요!</p>
                </MenuItem>
                <MenuItem>
                  <p>👥팀원 모집</p>
                  <p>함께 공모전, 프로젝트를 진행해요!</p>
                </MenuItem>
                <MenuItem>
                  <p>❓QNA</p>
                  <p>어려운 부분을 질문하고 답해요!</p>
                </MenuItem>
                <MenuItem><p>🙃자유게시판</p><p>자유롭게 소통해요!</p></MenuItem>
                
            </MenuContainer>
        
          </Menu>

        </Box>
    )

}

export default Home;