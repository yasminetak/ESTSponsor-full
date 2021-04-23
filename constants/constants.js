const ipAdress = "192.168.191.2";

const rootURL = `http://${ipAdress}/ESTSponsor`;
export const baseUrl = rootURL;

export const parainListURL = `${rootURL}/get_parrains.php`;
export const loginURL = `${rootURL}/auth/login.php`;
export const registerURL = `${rootURL}/auth/register.php`;

export const createNotificationsURL = `${rootURL}/create_notification.php`;

export const getPublicite = `${rootURL}/get_publications.php`;

export const USERSTORAGE = "USERSTORAGE";
export const DATE_FORMAT = "YYYY/MM/DD HH:mm:ss";
