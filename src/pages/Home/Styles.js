import styled from "styled-components";

// Removed "width:100vw" from MainPage. There was a scrollbar across 
// the bottom of the page for some reason before removing it

export const MainPage = styled.div`
    height: 100vh;
    background-color: #fffefb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    font-family: 'Limelight', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
`;

export const SubTitle = styled.p`
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
`;