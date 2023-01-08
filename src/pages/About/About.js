import MainLayout from "../../components/Main Layout/Main Layout";
import { AboutPage, Title, MajorText, MinorText, LineContainer, ProjectPage, 
    ProjectLeft, ProjectRight, SectionTitle, SectionSubTitle, SectionContent,
    HalfSubSection, SubIdea, SubIdeaTitle, SubIdeaText} from "./Styles";
import Line from "../../images/Line.svg"
import LightBulb from "../../images/LightBulb.svg"
import Bubble from "../../images/bubble.svg"


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
                    <HalfSubSection>
                        <SubIdea>
                            <img src={LightBulb} alt="lightbulb" />
                            <SubIdeaTitle>Brainstorming</SubIdeaTitle>
                            <SubIdeaText>Bring up all ideas<br/>No limitation at all</SubIdeaText>
                        </SubIdea>
                        <SubIdea>
                            <img src={Bubble} alt="bubble" />
                            <SubIdeaTitle>Brainstorming</SubIdeaTitle>
                            <SubIdeaText>Make a plan on how to<br/>bring brilliant ideas to life</SubIdeaText>
                        </SubIdea>
                    </HalfSubSection>
                    <HalfSubSection>
                    <SubIdea>
                            <img src={LightBulb} alt="lightbulb" />
                            <SubIdeaTitle>Brainstorming</SubIdeaTitle>
                            <SubIdeaText>Bring up all ideas<br/>No limitation at all</SubIdeaText>
                        </SubIdea>
                        <SubIdea>
                            <img src={Bubble} alt="bubble" />
                            <SubIdeaTitle>Brainstorming</SubIdeaTitle>
                            <SubIdeaText>Make a plan on how to<br/>bring brilliant ideas to life</SubIdeaText>
                        </SubIdea>
                    </HalfSubSection>
                </ProjectLeft>
                <ProjectRight>

                </ProjectRight>
            </ProjectPage>
        </MainLayout>
    );
};