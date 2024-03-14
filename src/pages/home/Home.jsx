import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import SectionFour from "./SectionFour"
import SectionOne from "./SectionOne"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"


const Home = () => {
    return (
        <>
            <Navbar>
                <a href='#problem' className="font-inter font-medium text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-500" >Problem</a>
                <a href='#deeperdive' className="font-inter font-medium text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-500" >Deeper Dive</a>
                <a href='#solution' className="font-inter font-medium text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-500" >Solution</a>
                <a href='#future' className="font-inter font-medium text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-500" >Inevitable Future</a>
            </Navbar>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </>
    )
}

export default Home