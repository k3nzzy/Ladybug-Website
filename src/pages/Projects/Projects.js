import React from "react";
import MainLayout from "../../components/Main Layout/Main Layout";
import Footer from "../../components/Light Footer/Footer";
import { TitlePage, Title, SubTitle, MinorText, LineContainer, OnGoingProjectPage, SectionTitle, SectionSubTitle, ProjectsContainer, ProjectTab, ContactBtn, PrevProjectPage, TitleContainer, IndexBtn, IndexContainer, ProjectImgContainer, Row } from "./Styles";
import Line from "../../images/Line.svg";
import Arrow from "../../images/arrow-right.svg";
import PlaceHolder from "../../images/daisies-ge69e6d609_1920.jpg";

export default function Projects() {
    return (
        <MainLayout>
            <TitlePage>
                <Title>Projects</Title>
                <SubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SubTitle>
                <LineContainer>
                    <img src={Line} alt="scroll line" />
                    <MinorText>Scroll for more</MinorText>
                </LineContainer>
            </TitlePage>

            <OnGoingProjectPage>
                <SectionTitle>On-going Projects</SectionTitle>
                <SectionSubTitle>
                    nisl nisi scelerisque eu ultrices vitae auctor eu augue ut
                </SectionSubTitle>
                <ProjectsContainer>
                    <ProjectTab>Club Promotion Website</ProjectTab>
                    <ProjectTab>Coming Soon...</ProjectTab>
                    <ProjectTab>Coming Soon...</ProjectTab>
                </ProjectsContainer>
                <ContactBtn>Contact Us</ContactBtn>
            </OnGoingProjectPage>

            <PrevProjectPage>
                <TitleContainer>
                    <SectionTitle>Previous Projects</SectionTitle>
                    <SectionSubTitle>
                        nisl nisi scelerisque eu ultrices vitae auctor eu augue ut
                    </SectionSubTitle>
                </TitleContainer>
                <img src={Arrow} alt="arrow" />
                <Row>
                    <IndexContainer>
                        <IndexBtn>01</IndexBtn>
                        <IndexBtn>02</IndexBtn>
                        <IndexBtn>03</IndexBtn>
                        <IndexBtn>04</IndexBtn>
                        <IndexBtn>05</IndexBtn>
                    </IndexContainer>
                    <ProjectImgContainer>
                        <img src={PlaceHolder} alt="place holder"/>
                    </ProjectImgContainer>
                
                </Row>
            </PrevProjectPage>
            <Footer />
        </MainLayout>
    );
};