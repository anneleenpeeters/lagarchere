import { parseCookies, destroyCookie } from 'nookies'
import Router from "next/router";


export const getJwt = (ctx) => {
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;
    return jwt;
}

export function logout()  {
    destroyCookie(null, "jwtToken");
    Router.push("/login");
}