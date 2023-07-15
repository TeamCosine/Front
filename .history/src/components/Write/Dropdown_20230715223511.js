import React from "react";
import { useState } from "react";

const Dropdown = () =>{
    const [nameOption, setNameOption] = useState('');
    const [boardOption, setBoardOption] = useState('');
    const nameOptions = ['익명', '닉네임 공개'];
    const boardOptions = ['자유게시판', 'QNA', '팀원모집게시판'];
}
export default Dropdown;