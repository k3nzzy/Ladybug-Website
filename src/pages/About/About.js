import MainLayout from "../../components/Main Layout/Main Layout";
import { AboutPage, Title, MajorText, MinorText, LineContainer, ProjectPage, 
    ProjectLeft, ProjectRight, SectionTitle, SectionSubTitle, SectionContent,
    HalfSubSection, SubIdea, SubIdeaTitle, SubIdeaText, ImageContainer, JoinPage,
    HalfPage, ButtonFilled, SectionPage, SectionTitle2, SectionContent2, ButtonClear,
    ButtonContainer} from "./Styles";
import Line from "../../images/Line.svg";
import LightBulb from "../../images/LightBulb.svg";
import Bubble from "../../images/bubble.svg";
import Tag from "../../images/tag.svg";
import Star from "../../images/star.svg";
import ComputerScreen from "../../images/ComputerScreen.svg"
import Footer from "../../components/Dark Footer/Footer";

export default function About() {
    //project page requires major overhaul/rework
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
                            <SubIdeaTitle>Planning</SubIdeaTitle>
                            <SubIdeaText>Make a plan on how to<br/>bring brilliant ideas to life</SubIdeaText>
                        </SubIdea>
                    </HalfSubSection>
                    <HalfSubSection>
                        <SubIdea>
                            <img src={Tag} alt="tag" />
                            <SubIdeaTitle>Implementation</SubIdeaTitle>
                            <SubIdeaText>Distribute the work,<br/>tackle the work with everyone</SubIdeaText>
                        </SubIdea>
                        <SubIdea>
                            <img src={Star} alt="star" />
                            <SubIdeaTitle>Release</SubIdeaTitle>
                            <SubIdeaText>Surprise the world with<br/>your creation</SubIdeaText>
                        </SubIdea>
                    </HalfSubSection>
                </ProjectLeft>
                <ProjectRight>
                    <ImageContainer>
                        <img src={ComputerScreen} alt="computer screen"/>
                    </ImageContainer>
                </ProjectRight>
            </ProjectPage>
            <JoinPage>
                <HalfPage>

                </HalfPage>
                <HalfPage>
                    <SectionTitle>How to Join the Club</SectionTitle>
                    <SectionSubTitle>Led by women, open to everyone</SectionSubTitle>
                    <SectionContent>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.</SectionContent>
                        <ButtonFilled>Join the mailing list</ButtonFilled>
                </HalfPage>
            </JoinPage>
            <SectionPage>
                <SectionTitle2>Support Our Club!</SectionTitle2>
                <SectionSubTitle>We are still seeking donations</SectionSubTitle>
                <SectionContent2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Pretium fusce id velit ut tortor pretium viverra suspendisse. 
                    Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. 
                    Ultricies leo integer malesuada nunc. Dapibus ultrices in iaculis nunc.
                    Mauris pharetra et ultrices neque ornare aenean euismod elementum. 
                    Non odio euismod lacinia at quis risus. Sit amet aliquam id diam maecenas. 
                    Elementum pulvinar etiam non quam lacus. 
                    Nulla porttitor massa id neque aliquam vestibulum morbi.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Aliquam sem et tortor consequat id. 
                    Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. 
                    Tellus orci ac auctor augue. Mauris ultrices eros in cursus turpis massa.</SectionContent2>
                <ButtonContainer>
                    <ButtonClear>Contact President</ButtonClear>
                    <ButtonClear>Contact Treasurer</ButtonClear>
                </ButtonContainer>
            </SectionPage>
            <Footer/>
        </MainLayout>
    );
};