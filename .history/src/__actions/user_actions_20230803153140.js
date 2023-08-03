import axios from 'axios';

export const INVITE_USER = "INVITE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const AUTH_USER = "AUTH_USER";

export function inviteUser(dataToSubmit) {
    const request = axios.post("/users/new-user", dataToSubmit)
    .then ((response) => response.data);
}
