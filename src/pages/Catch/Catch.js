import MainLayout from "../../components/Main Layout/Main Layout";
import { MainPage, Title, SubTitle} from "./Styles";

export default function Catch() {
    const str = "This page is not exist.\nClick here to go back to previous page";

    return (
        <MainLayout>
            <MainPage>
                <Title>Oops...</Title>
                <SubTitle>{str}</SubTitle>
            </MainPage>
        </MainLayout>
    );
};