import React from "react";
import styled from 'styled-components';
import { useState , useEffect} from "react";
import axios from "axios";
import {Link, withRouter} from "react-router-dom";

const Container = styled.div`
   border-radius: 15px;
   width : 95%;
   height : 8.5vh;
   background-color: white;
   color : black;
   font-weight: 800;
   font-size : 15px;
   text-align: center;
   align-items: center;
   display:flex;
   justify-content: center;
   margin-bottom: 1vh;
   margin-top: 1vh;
`;

const Card = () =>{


    const [myLikes , setMyLikes ] = useState([]);
    const getMyLike = () =>{
      let id = window.localStorage.getItem("id");
      axios
      .post('', {userFrom : id})
      .then((response) =>{
        setMyLikes(response.data.likes);
      })
      .catch((e) => alert('좋아요한 게시글을 불러오는데 실패하였습니다.'))
    }

    return (
        <Container>
          <p>Eveloper 이용 규칙 확인</p>
        </Container>

    )


}

export default Card;