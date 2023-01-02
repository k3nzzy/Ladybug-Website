import React from "react";
import { Container, SocialContainer, ContentContainer } from "./Styles";
import Twitter from "../../images/Light twitter.svg";
import LinkedIn from "../../images/Light linkedin.svg";
import Instagram from "../../images/Light instagram.svg";


export default function Footer() {

    return (
        <Container> 
            <ContentContainer>
                <SocialContainer>
                    <img src={Twitter} alt="twitter" />
                    <img src={LinkedIn} alt="linkedin" />
                    <img src={Instagram} alt="instagram" />
                </SocialContainer>
                <p>© 2022 by Ladybug Development Club</p>
                <p>Designed by Kenzy Kim</p>
                <p>Implemented by Kenzy Kim, Shibli Nomani, Oliver De Leon</p>
            </ContentContainer>
        </Container>
    );
};