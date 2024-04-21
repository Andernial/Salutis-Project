

import { CardRed } from "../components/RedCard/Redcard";
import Header from "../components/Header/Header";
import { Presentation } from "../components/Presentation/Presentation";
import "./home.css"
import { Footer } from "../components/Footer/footer";
import { CardBeige } from "../components/BeigeCard/BeigeCard";

// import { MiddlePage } from "../components/MiddlePage/MiddlePage";
// import { Card1} from "../components/Card1/Card1";

export default function Home() {
    return (
        <>
            <Header />
            <Presentation />
            <CardBeige photo={<img src="./src\assets\images\Rectangle 13.png" alt="professional" className="img-fluid" />}
            title={"A benchmark in the region"} text="Located at 123 Health Avenue, Saluts Hospital is a benchmark in healthcare for the population of the region. The institution offers a wide range of medical and surgical services, with a team of highly qualified and experienced professionals.
            The hospital has state-of-the-art medical equipment, which ensures the provision of high-quality health services. In addition, Saluts Hospital is committed to providing personalized and humane care to all its patients.
            The institution seeks to promote the health and well-being of the community, offering accessible and quality health services. Saluts Hospital is the right place to take care of your health and your family's health"  />
           
            <CardRed photo={<img src="./src\assets\images\Group 12.png" alt="hospital" className="img-fluid" />}
            title={"Infrastructure and equipment"} text="a modern infrastructure, designed to provide comfort, safety and efficiency in patient care. The hospital has:
            Spacious and comfortable facilities: Large and well-lit inpatient rooms, equipped with electric beds, TV and Wi-Fi internet.
            State-of-the-art surgical center: Operating rooms equipped with high-tech equipment, including robotic surgical tables, multiparameter monitors and advanced imaging systems.
            Intensive Care Unit (ICU): Equipped with latest generation respirators, cardiac monitors and hemodialysis equipment.
            Diagnostic Imaging Center: Performs computed tomography, magnetic resonance imaging, ultrasound and X-ray exams, using state-of-the-art equipment.
            Clinical analysis laboratory: Performs a wide range of laboratory tests, ensuring accurate and fast diagnostics."/>
           
            <CardBeige photo={<img src="./src\assets\images\Rectangle 14.png" alt="professional" className="img-fluid" />}
            title={"A benchmark in the region"} text="The Saluts Hospital has a team of highly trained and specialized professionals, dedicated to providing excellent medical care to its patients. The team includes:
            Doctors: Specialists in various fields of medicine, including cardiology, neurology, oncology and general surgery.
            Nurses: Qualified and experienced professionals, trained to provide comprehensive and personalized nursing care.
            Health technicians: Specialized in areas such as radiology, laboratory and physiotherapy, ensuring the accuracy and efficiency of diagnostic and therapeutic procedures.
            The Saluts Hospital team regularly participates in training and refresher courses, keeping up to date on the latest medical techniques and advances. The hospital also invests in research and development, promoting innovation and continuous improvement in the quality of care.
            Thanks to its highly trained and specialized team, Saluts Hospital offers its patients accurate diagnoses, effective treatments and personalized care, ensuring the best possible outcomes."/>
           
           <CardRed photo={<img src="./src\assets\images\Group 20.png" alt="hospital" className="img-fluid" />}
           title={"Check your health insurance coverage"} text="To ensure that you receive the best possible medical care, it is important to check if your health insurance plan provides coverage for the hospital.
           Contact your health insurance provider to confirm if the hospital is included in their network. Provide the hospital's name and your health insurance identification number.
           If the hospital is not covered by your current plan, you may want to consider switching to a plan that does offer coverage. This will ensure that you have access to quality medical care when you need it most.
           Do not hesitate to contact the hospital or your health insurance provider for more information on coverage and plan options. Telephone: (123) 456-7890
           Email: atendimento@hospitalficticio.com.b"/>
            <Footer />
        </>
    )
}