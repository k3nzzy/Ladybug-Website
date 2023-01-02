import MainLayout from "../../components/Main Layout/Main Layout";
import { AboutPage, Title, MajorText, MinorText, LineContainer} from "./Styles";
import Line from "../../images/Line.svg"

export default function About() {
    return (
        <MainLayout>
            <AboutPage>
                <Title>About Us</Title>
                <MajorText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</MajorText>
                <LineContainer>
                    <img src={Line} alt="scroll line" />
                    <MinorText>Scroll for more</MinorText>
                </LineContainer>
            </AboutPage>
        </MainLayout>
    );
};