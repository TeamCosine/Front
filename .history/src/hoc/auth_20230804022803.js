import React from "react";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {auth} from "../__actions/user_actions";

  // null => 아무나 출입가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능


// eslint-disable-next-line import/no-anonymous-default-export
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
        }, [dispatch, props.history]);

        return <SpecificComponent />;
    }

    return AuthCheck;

}