import styled from "styled-components";

export const AboutPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export const Title = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 110px;
    padding-top: 10%;
    margin-right: 10%;
`;

export const MajorText = styled.p`
    width: 70%;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    margin-right: 10%;
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

export const ProjectPage = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-end;
    flex-wrap: nowrap;
`;

export const ProjectLeft = styled.div`
    height: 90vh;
    width: 60vw;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    flex-wrap: nowrap;
`;

export const ProjectRight = styled.div`
    height: 90vh;
    width: 40vw;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const SectionTitle = styled.p`
    font-family: 'Limelight';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    margin-left: 10%;
`;

export const SectionSubTitle = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    margin-left: 10%;
    color: #161313
`;

export const SectionContent = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    width: 454px;
    margin-top: 2%;
    margin-bottom: 2%;
    color: #161313
`;