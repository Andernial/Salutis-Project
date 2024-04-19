import {  CardBeige } from "../components/BeigeCard/BeigeCard";
import { CardRed } from "../components/RedCard/Redcard";
import Header from "../components/Header/Header";
import { Presentation } from "../components/Presentation/Presentation";
import "./home.css"
import { Footer } from "../components/Footer/footer";
// import { MiddlePage } from "../components/MiddlePage/MiddlePage";
// import { Card1} from "../components/Card1/Card1";

export default function Home() {
    return (
        <>
            <Header />
            <Presentation />
            <CardBeige />
            <CardRed />
            <Footer />
        </>
    )
}