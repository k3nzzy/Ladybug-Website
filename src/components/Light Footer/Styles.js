import styled from "styled-components";

export const Container = styled.div`
    width: 100wh;
    height: 200px;
    background-color: #FFFEFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialContainer = styled.div`
    width: 10vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    margin-bottom: 10px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    gap: 5px;
`;