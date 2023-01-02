import styled from "styled-components";

export const MainPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
`;

export const Title = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 110px;
    padding-top: 10%;
    margin-left: 10%;
`;

export const SubTitle = styled.p`    
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    text-align: center;
    white-space: pre-line;
    padding-bottom: 5%;
    margin-left: 10%;
`;

export const LinkContainter = styled.p`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-top: 1px;
    border-top-style: solid;
    margin-left: 10%;
`;

export const LinkText = styled.p`
    flex-grow: 2;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 60px;
`;

export const LinkContainerB = styled(LinkContainter)`
    border-bottom: 1px;
    border-bottom-style: solid;
    margin-left: 10%;
`;