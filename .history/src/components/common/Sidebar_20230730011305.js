import React from "react";
import styled  from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
 background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(62, 141, 244, 0.20);
 width : 200px;
 height: 100vh;

`;
const Title = styled.div`
    font-size: 30px;
    color : #FFFFFF;
    font-weight: 800;
    text-align: center;
    height: 70px;
    background-color: #3E8DF4;
    margin : 0 auto;
    text-decoration-line:none;
    justify-content: center;
    margin : 0 auto;
    
`;
const Menu =styled.div`
   font-size: 22px;
   font-weight: 600;
   color:black;
   margin-top : 15px;
   text-decoration-line : none;
   text-align: left;
   margin-left : 25px;

   
   

`;

const Home = styled.div`
   font-size: 25px;
   font-weight: 700;
   color : black;
   margin-bottom :30px;
   text-decoration-line : none;
   text-align: left;
   margin-left : 25px;
    
`;

const Sidebar =() =>{
    return (
        <Container>
            <Link to ="/home">
                <Title>Eveleoper</Title>
            </Link>
            <Link to ="/home">
                <Home>🏠     HOME</Home>
            </Link>
            <Link to ="/qna">
                <Menu>❓  QNA</Menu>
            </Link>
            <Link to = "/BoardInfo">
                <Menu>💡 정보공유 게시판</Menu>
            </Link>
            <Link to ="/BoardTeam">
                 <Menu>👥  팀원 모집</Menu>
            </Link>
            <Link to ="/BoardFree">
                <Menu>🙃  자유게시판</Menu>
            </Link>
            <Link to="/BoardNotice">
               <Menu>🚀  공지사항</Menu>
            </Link>
        </Container>
    )
}

export default Sidebar;