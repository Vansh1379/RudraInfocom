import CallToAction from "../components/CallToAction"
import Footer from "../components/Fotter"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <Services />
                <WhyChooseUs />
                <CallToAction />
            </main>
            <Footer />
        </div>
    )
}
