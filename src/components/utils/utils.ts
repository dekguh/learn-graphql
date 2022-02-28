export const parseJwt = (token : string | null) => {
    if(token) return JSON.parse(atob(token.split('.')[1]));
    if(!token) return null
};