
import { CardRed } from "../components/RedCard/Redcard";
import Header from "../components/Header/Header";
import { Presentation } from "../components/Presentation/Presentation";
import "./home.css"
import { Footer } from "../components/Footer/footer";
import { CardBeige } from "../components/BeigeCard/BeigeCard";
import { CardBox } from "../components/CardsBox/CardsBox";
import { DeveloperCard } from "../components/DeveloperCard/DeveloperCard";

import Anderson from "../assets/images/Anderson.jpeg"
import Ingrid from "../assets/images/Ingrid.jpg"


export default function Home() {
    return (
        <>
            <Header />
            <Presentation />
            <CardBeige id={"local"} photo={<img src="./src\assets\images\Rectangle 13.png" alt="professional" className="img-fluid" />}
                title={<>A benchmark in the region</>} text={<><p>Located at 123 Health Avenue, Saluts Hospital is a benchmark in healthcare for the population of the region. The institution offers a wide range of medical and surgical services, with a team of highly qualified and experienced professionals.
            The hospital has state-of-the-art medical equipment, which ensures the provision of high-quality health services. In addition, Saluts Hospital is committed to providing personalized and humane care to all its patients.
            The institution seeks to promote the health and well-being of the community, offering accessible and quality health services. Saluts Hospital is the right place to take care of your health and your family&apos;s health </p> </>} />

            <CardRed id={"equipaments"} photo={<img src="./src\assets\images\Group 12.png" alt="hospital" className="img-fluid" />}
                title={<>Infrastructure and equipment</>} text={<p>a modern infrastructure, designed to provide comfort, safety and efficiency in patient care. The hospital has:
            Spacious and comfortable facilities: Large and well-lit inpatient rooms, equipped with electric beds, TV and Wi-Fi internet.
            State-of-the-art surgical center: Operating rooms equipped with high-tech equipment, including robotic surgical tables, multiparameter monitors and advanced imaging systems.
            Intensive Care Unit (ICU): Equipped with latest generation respirators, cardiac monitors and hemodialysis equipment.
            Diagnostic Imaging Center: Performs computed tomography, magnetic resonance imaging, ultrasound and X-ray exams, using state-of-the-art equipment.
            Clinical analysis laboratory: Performs a wide range of laboratory tests, ensuring accurate and fast diagnostics</p> }/>

            <CardBeige id={"specialists"} photo={<img src="./src\assets\images\Rectangle 14.png" alt="professional" className="img-fluid" />}
                title={<>A benchmark in the region</>}
                text={<>
                    <p>The Saluts Hospital has a team of highly trained and specialized professionals, dedicated to providing excellent medical care to its patients. The team includes:</p>
                    <ul>
                        <li>Doctors: Specialists in various fields of medicine, including cardiology, neurology, oncology, and general surgery.</li>
                        <li>Nurses: Qualified and experienced professionals, trained to provide comprehensive and personalized nursing care.</li>
                        <li>Health technicians: Specialized in areas such as radiology, laboratory, and physiotherapy, ensuring the accuracy and efficiency of diagnostic and therapeutic procedures.</li>
                    </ul>
                    <p>The Saluts Hospital team regularly participates in training and refresher courses, keeping up to date on the latest medical techniques and advances. The hospital also invests in research and development, promoting innovation and continuous improvement in the quality of care.
                        Thanks to its highly trained and specialized team, Saluts Hospitaloffers its patients accurate diagnoses, effective treatments and personalized care, ensuring the best possible outcomes.</p>
                </>} />

            <CardRed id={"coverage"} photo={<img src="./src\assets\images\Group 20.png" alt="hospital" className="img-fluid" />}
                title={<>Check your health insurance coverage</>} text={
                    <>
                        <p className="col-sm-12 mt-3">To ensure that you receive the best possible medical care, it is important to check if your health insurance plan provides coverage for the hospital.
                            Contact your health insurance provider to confirm if the hospital is included in their network. Provide the hospital&apos;s name and your health insurance identification number.
                            If the hospital is not covered by your current plan, you may want to consider switching to a plan that does offer coverage. This will ensure that you have access to quality medical care when you need it most.
                            Do not hesitate to contact the hospital or your health insurance provider for more information on coverage and plan options.</p>
                        <ul>
                            <li>
                                Telephone:(123) 456-7890
                            </li>
                            <li>
                                Email: atendimento@hospitalficticio.com.br
                            </li>
                        </ul>
                    </>
                } />
                  <CardBox >
                    <DeveloperCard name='Anderson Carlos' title='FullStack Developer' linkedin="https://www.linkedin.com/in/anderson-carlos-dev/" linkgit="https://github.com/Andernial" img={Anderson} email="loonander@gmail.com" />
                    <DeveloperCard name='Ingrid Oliveira' title='FullStack Developer' linkedin="https://www.linkedin.com/in/ingrid-oliveiradev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" linkgit="https://github.com/iingridliveira" img={Ingrid} email="ingridoliveirasilva2002@gmail.com" />
                    <DeveloperCard name='Daniel' title='FullStack Developer' linkedin="https://www.linkedin.com/in/anderson-carlos-dev/" linkgit="https://github.com/Andernial"  />
                </CardBox>
              
            <Footer />
        </>
    )
}