import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'


const SidebarContainer = styled.div`
   display: flex;
   width : 20%;
   background-color: #3E8DF4;
`;

const Mainbox = styled.div`
   color : #FFFFFF;
   text-align: center;
   justify-content: center;
   background-color: #3E8DF4;
   font-size: 35px;
   font-weight: bolder;

`;
const SubContainer = styled.div`
   width : 20%;
   font-size: 27px;

`;
const Home = styled.div`
     font-size : 30px;

`;
const QNA = styled.div``;
const Info = styled(QNA);
const Teammate = styled(QNA);
const Jayou = styled(QNA);
const Gonji = styled(QNA);

const Sidebar = () =>{
    const navigate =useNavigate();
    const handleNavigateHome = () =>{
        navigate("/")
    }
    const handleNavigateQNA = () =>{
        navigate("/QNA")
    }

    const handleNavigateInfo = () =>{
        navigate("/Info")
    }

    const handleNavigateTeammate = () =>{
        navigate("/Teammate")
    }
    const handleNavigateJayou = () =>{
        navigate("/Jayou")
    }
    const handleNavigateGongji = () =>{
        navigate("/Gongji")
    }
    

    return (
        <SidebarContainer>
            <Mainbox onClick={handleNavigateHome}>Eveleoper</Mainbox>
            <SubContainer>
                <Home onClick={handleNavigateHome}>🏠   Home</Home>
                <QNA onClick={handleNavigateQNA}>❓  QNA</QNA>
                <Info onClick = {handleNavigateInfo}>💡  정보 공유</Info>
                <Teammate onClick = {handleNavigateTeammate}>👥  팀원 모집</Teammate>
                <Jayou onClick = {handleNavigateJayou}>🙃  자유게시판</Jayou>
                <Gonji onClick = {handleNavigateGongji}>
                🚀  공지사항
                </Gonji>


            </SubContainer>
            

        </SidebarContainer>
    )


}

export default Sidebar;