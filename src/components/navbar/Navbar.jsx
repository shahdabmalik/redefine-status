import { useEffect, useState } from "react"
import DarkModeBtn from "../darkModeBtn/DarkModeBtn"
import { FaArrowRight } from "react-icons/fa6";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"


const Navbar = ({ children }) => {

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [shadow, setShadow] = useState(false)
    const [navMenu, setNavMenu] = useState(false)


    const handleNavMenu = () => {
        setNavMenu(!navMenu)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 64) {
                if (window.scrollY < lastScrollY) {
                    setShow(true)
                    setShadow(true)
                } else {
                    setShow(false)
                }
            } else {
                setShow(true)
                setShadow(false)
            }
            setLastScrollY(window.scrollY)
        })
    }, [lastScrollY])

    return (
        <>
            <div className={"fixed z-50 top-0 left-0 w-full transition-transform duration-300 ease-linear backdrop-blur-lg bg-white dark:bg-slate-950 bg-opacity-80 dark:bg-opacity-80 " + (show ? " translate-y-0 " : " -translate-y-32 ") + (shadow ? " shadow-md " : " ")} >
                <nav className="max max-w-screen-xl w-full mx-auto px-4 md:px-10 h-16 flex justify-between items-center" >
                    <Link to={"/"} className="h-16 w-48 sm:w-56 lg:w-60 overflow-hidden flex items-center" ><img src={logo} alt="logo" /></Link>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-6 items-center" >{children}</div>
                        <div className="flex gap-4 items-center" >
                            <DarkModeBtn />
                            {children && <RiMenuFill size={28} onClick={handleNavMenu} className="md:hidden text-black dark:text-slate-100 dark:text-color-light" />}
                        </div>
                    </div>
                </nav>
            </div>
            <div className={"fixed top-0 left-0 z-[100] w-full h-full flex flex-col shadow-2xl md:hidden bg-white dark:bg-slate-950 bg-opacity-95 dark:bg-opacity-90 backdrop-blur-sm transition-all duration-500 " + (navMenu ? "" : " translate-x-[120%] ")} >
                <div className="h-16 w-full  flex justify-end items-center px-5 hover:text-blue-500 dark:text-slate-200" ><FaArrowRight size={32} onClick={handleNavMenu} /></div>
                <div className="flex-grow flex gap-10 flex-col justify-center px-5 text-center text-3xl" onClick={handleNavMenu} >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Navbar