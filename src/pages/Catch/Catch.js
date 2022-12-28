import MainLayout from "../../components/Main Layout/Main Layout";
import { MainPage, Title, SubTitle} from "./Styles";

export default function Catch() {

    return (
        <MainLayout>
            <MainPage>
                <Title>Oops...</Title>
                <SubTitle>
                    <p>This page is not exist.</p>
                    <p><a href="/.">Click here</a> to go back to previous page</p>
                </SubTitle>
            </MainPage>
        </MainLayout>
    );
};