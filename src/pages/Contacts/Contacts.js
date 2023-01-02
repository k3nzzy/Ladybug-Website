import MainLayout from "../../components/Main Layout/Main Layout";
import { MainPage, Title, SubTitle, LinkContainter, LinkText, LinkContainerB} from "./Styles";
import Vector from "../../images/Vector.svg";

export default function Catch() {

    return (
        <MainLayout>
            <MainPage>
                    <Title>Contact Us</Title>
                    <SubTitle>We will get back to you as soon as possible</SubTitle>
                    <LinkContainter>
                        <LinkText>LinkedIn</LinkText>
                        <a href="/"><img src={Vector}/></a>
                    </LinkContainter>
                    <LinkContainter>
                        <LinkText>Instagram</LinkText>
                        <a href="/"><img src={Vector}/></a>
                    </LinkContainter>
                    <LinkContainter>
                        <LinkText>OrgCentral</LinkText>
                        <a href="/"><img src={Vector}/></a>
                    </LinkContainter>
                    <LinkContainerB>
                        <LinkText>Email</LinkText>
                        <a href="/"><img src={Vector}/></a>
                    </LinkContainerB>
            </MainPage>
        </MainLayout>
    );
};