import styled from "styled-components";
import holderimg from "../../images/daisies-ge69e6d609_1920.jpg";

export const TitlePage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #fffefb;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    margin: 0px 0px 0px 160px;
`;

export const SubTitle = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    margin: 0px 0px 0px 160px;
    width: 780px;
`;

export const SectionTitle = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
`;

export const SectionSubTitle = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
`;

export const MinorText = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    text-align: center;
    margin: 5px 0px 0px 0px;
`;

export const LineContainer = styled.div`
    position: absolute;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    align-self: center;
    margin: 200px 0px 0px 0px;
`;

export const OnGoingProjectPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fffefb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProjectsContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 100px 0px 80px 0px;
`;

export const ProjectTab = styled.div`
    width: 300px;
    height: 300px;
    text-align: center;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 300px;
    color: #fffefb;
    border-radius: 10px;
    background-image: url(${holderimg});
    background-color: rgba(63, 63, 63, 0.4);
`;

export const ContactBtn = styled.button`
    border: none;
    border-radius: 10px;
    background: #383838;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #FFFEFB;
    padding: 15px 40px 15px 40px;
`;

export const PrevProjectPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #383838;
    color: white;
`;

export const TitleContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0px 0px 0px 160px;
`;

export const IndexContainer = styled.div`
    width: 50px;
    height: 300px;
    margin: 70px 20px 0px 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const IndexBtn = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    color: #F5F5F5;
    background-color: transparent;
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    :hover {
        color: red;
    }
`;

export const ProjectImgContainer = styled.div`
    width: 380px;
    height: 500px;
    overflow: hidden;
    border-radius: 5px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;
