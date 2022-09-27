import { createGlobalStyle } from 'styled-components';
//test Merge
const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Kanit', sans-serif;
}

body{
    background: #F5F5F5;
    
}

.header {
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
    height: 55rem;
    width: 100%;
    border-radius: 0px 0px 200px 200px;
}

.header-login {
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
    height: 35rem;
    border-radius: 0px 0px 200px 200px;
}

header.masthead {
    height: 100%;
    padding-top: 7rem;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    overflow-y: hidden; 
}

.remove-bg {
    background: rgba(245, 3, 3, 0);
}

.dropshadow {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.text-96 {
    font-weight: 400;
    font-size: 70px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.width-563 {
    width: 380px;
}

.width-15rem {
    width: 15rem;
}

.img-content {
    width: 100%;
    height: 40rem;
}

.card-img-left {
    width: 45%;
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
    background-size: cover;
}

.btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
}

.btn-google {
    color: white !important;
    background-color: #ea4335;
}

.btn-facebook {
    color: white !important;
    background-color: #3b5998;
}

.login {
    margin-top: -30rem;
}

.margin-top-25rem {
    margin-top: -27rem;
}

.bg-4E598C {
    border: 0px solid rgba(255, 255, 255, 0);
    background-image: linear-gradient(to bottom, #00509d, #1962b0, #2a74c4, #3987d7, #479aeb);
}

.bg-4E598C:hover {
    border: 0px solid rgba(255, 255, 255, 0);
    background-image: linear-gradient(to top, #00509d, #1962b0, #2a74c4, #3987d7, #479aeb);
}

.bg-productHome{
    background-image: linear-gradient(to bottom, #F5F5F5, #fee1c6, #ffc697, #ffaa6b, #ff8c42);
}
`;

export default GlobalStyle;