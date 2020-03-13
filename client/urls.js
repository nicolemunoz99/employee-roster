

export const api = 'http://127.0.0.1:8080';
// export const api = 'https://nicolemunoz.xyz';



// local test
export const login = `https://munoztest.auth.us-east-2.amazoncognito.com/login?client_id=2pf8f80gs65gnsihmaeln6orab&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:8080/redirect`



// deployed
// let loginPrefix = 'https://munozauth.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=coi6gta8arg8169nr77t9jd2b&redirect_uri='
// export const login = `${loginPrefix}https://nicolemunoz.xyz/redirect`;
