import Header from "../components/Header/Header";
import "./home.css"
import { MiddlePage } from "../components/MiddlePage/MiddlePage";
import { ThirdPage } from "../components/ThirdPage/ThirdPage";

export default function Home() {
    return (
        <>
            <Header />
            <MiddlePage />
            <ThirdPage />
        </>
    )
}