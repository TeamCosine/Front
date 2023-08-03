//메인 페이지
import React from "react";
import styled from "styled-components";
import Card from "../components/home/Card";
import Sidebar from "../components/common/Sidebar";
import {Link} from 'react-router-dom';
const Box = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Title = styled.div`
    margin-top: 13vh;
    font-size: 40px;
    text-align: center;
    font-weight: 800;
    display: flex;
    color : #006fff;

`;
const Row = styled.div`
   flex-direction: column;
   display: flex;
   margin-left: 10vw;
   margin-right: 10vw;
   
`;
const Container = styled.div`
   background-color: #D9D9D9;
   border-radius: 15px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width :20vw;
   display: flex;
   justify-items: center;
   border-color: #D9D9D9;
   
`;
const HomeContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin-top: 20px;
   justify-content: center;
   justify-items: center;


`;
const Menu = styled.div`
    margin-top: 5vh;
`;
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
         <Link to ="/home">
                <Title>Eveleoper</Title>
            </Link> 
          <Title>이화의 개발자👩‍💻 여러분, 환영합니다👋</Title>
          <HomeContainer>
          <Row>
            <p style={{color:"#006FFF", fontWeight:"bold", fontSize:"20px"}}>🚀 공지사항</p>
            <Container>
                <Card/>
                <Card/>
                <Card/>

            </Container>
          </Row>
          <Row>
            <p style={{color:"#006FFF", fontWeight:"bold", fontSize:"20px"}}>🌈 현재 인기글을 확인하세요!</p>
            <Container>
                <Card />
                <Card />
                <Card />

            </Container>
          </Row>
          </HomeContainer>
          <Menu>
            <p style={{color:"#006FFF", fontWeight:"bold", fontSize:"20px"}}>🤩 흥미로운 게시판을 둘러보세요</p>
            <MenuContainer>
              <Link to="/BoardInfo">
               <MenuItem>
                   <p style={{color :"black", fontSize:"18px", marginBottom:"0.5vh", fontWeight:"bold"}}>💡정보 공유</p>
                  <p style={{fontSize:"15px"}}>개발 지식이나 최신 정보를 공유해요!</p>
               </MenuItem>
               </Link>
               <Link to="BoardTeam">
                <MenuItem >
                  <p style={{color :"black", fontSize:"18px", marginBottom:"0.5vh", fontWeight:"bold"}}>👥팀원 모집</p>
                  <p style={{fontSize:"15px"}}>함께 공모전, 프로젝트를 진행해요!</p>
                </MenuItem>
                </Link>
                <Link to ="qna">
                <MenuItem>
                  <p style={{color :"black", fontSize:"18px", marginBottom:"0.5vh", fontWeight:"bold"}}>❓QNA</p>
                  <p style={{fontSize:"15px"}}>어려운 부분을 질문하고 답해요!</p>
                </MenuItem>
                </Link>
                <Link to ="BoardF"
                <MenuItem><p style={{color :"black", fontSize:"18px", marginBottom:"0.5vh", fontWeight:"bold"}}>🙃자유게시판</p><p style={{fontSize:"15px"}}>자유롭게 소통해요!</p></MenuItem>
                
            </MenuContainer>
        
          </Menu>

        </Box>
    )

}

export default Home;