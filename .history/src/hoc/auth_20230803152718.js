import React from "react";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {auth} from "../__actions/user_actions";

export default function(SpecificComponent,option ){
    function AuthCheck(props) {
        const dispatch = useDispatch();
        useEffect(() =>{
            dispatch(auth()).then((response) =>{
                if(!response.payload.isAuth) {
                    if (option) {
                        props.history.push("/home");
                    }
                } else {
                    if(option ===false) {
                        props.history.push("/");
                    }
                }
            });
        }, [dispatch, props.history])
    }

}