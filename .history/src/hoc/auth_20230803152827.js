import React from "react";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {auth} from "../__actions/user_actions";

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