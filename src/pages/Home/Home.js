import MainLayout from "../../components/Main Layout/Main Layout";
import { MainPage, Title, SubTitle } from "./Styles";


export default function Home(){   
  return (
      <MainLayout>
        <MainPage>
          <Title>Hello!</Title>
          <SubTitle>
            We are Ladybug Development Club at Penn State
          </SubTitle>
        </MainPage>
      </MainLayout>
    );
};