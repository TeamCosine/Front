import React from "react";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {auth} from "../__actions/user_actions";

export default function(SpecificComponent,option ){
    function AuthCheck(props) {
        const dispatch = useDispatch();
        useEffect(() =>{
            dispatch(auth()).then((response) =>{
                ㅑㄹ(!ㄱㄷ네ㅐㅜㄴ)
            })
        })
    }

}