import MainLayout from "../../components/Main Layout/Main Layout";
import { AboutPage, Title, MajorText, MinorText, LineContainer, ProjectPage, 
    ProjectLeft, ProjectRight, SectionTitle, SectionSubTitle, SectionContent,
    SubSection} from "./Styles";
import Line from "../../images/Line.svg"

export default function About() {
    return (
        <MainLayout>
            <AboutPage>
                <Title>About Us</Title>
                <MajorText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem 
                    ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua</MajorText>
                <LineContainer>
                    <img src={Line} alt="scroll line" />
                    <MinorText>Scroll for more</MinorText>
                </LineContainer>
            </AboutPage>
            <ProjectPage>
                <ProjectLeft>
                    <SectionTitle>We make something FUN</SectionTitle>
                    <SectionSubTitle>Bring your fresh ideas to the table</SectionSubTitle>
                    <SectionContent>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.</SectionContent>
                    <SubSection></SubSection>
                </ProjectLeft>
                <ProjectRight>

                </ProjectRight>
            </ProjectPage>
        </MainLayout>
    );
};