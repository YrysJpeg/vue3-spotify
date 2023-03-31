import Cookies from 'js-cookie';

export const setCookie = (key, value, params) => Cookies.set(ket, value, params);
export const getCookie = (key) => Cookies.get(key);
export const removeCookie = (ket) => Cookies.remove(key);
