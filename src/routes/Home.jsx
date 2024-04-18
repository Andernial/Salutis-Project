import Header from "../components/Header/Header";
import "./home.css"
import { MiddlePage } from "../components/MiddlePage/MiddlePage";
import { Card1} from "../components/Card1/Card1";

export default function Home() {
    return (
        <>
            <Header />
            <MiddlePage />
            <Card1 />
        </>
    )
}