import React from "react";
import { useState } from "react";
import styled from 'styled-components';
const DropdownComponent= styled.div
const Dropdown = () =>{
    const [nameOption, setNameOption] = useState('');
    const [boardOption, setBoardOption] = useState('');
    const nameOptions = ['익명', '닉네임 공개'];
    const boardOptions = ['자유게시판', 'QNA', '팀원모집게시판'];

    return (
        <>
           <DropdownComponent>

           </DropdownComponent>
        </>
    )
}
export default Dropdown;