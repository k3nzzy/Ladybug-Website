import MainLayout from "../../components/Main Layout/Main Layout";
import { MainPage, Title, SubTitle } from "./Styles";
import Footer from "../../components/Dark Footer/Footer";

export default function Home(){   
  return (
      <MainLayout>
        <MainPage>
          <Title>Hello!</Title>
          <SubTitle>
            We are Ladybug Development Club at Penn State
          </SubTitle>
        </MainPage>
        <Footer />
      </MainLayout>
    );
};