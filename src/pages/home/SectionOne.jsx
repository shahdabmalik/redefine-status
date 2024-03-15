import image1 from "../../assets/problem.webp"
import Lottie from 'lottie-react'
import animation from "../../assets/hero.json"

const SectionOne = () => {
    return (
        <div className='relative ' >
            <div className="overflow-hidden dark:bg-slate-950 bg-white w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 relative" >
                <div className='max-w-md' >
                    <Lottie animationData={animation} />
                </div>
                <h1 data-aos="fade-up" className="font-extrabold inline bg-clip-text bg-gradient-to-r from-blue-400 via-violet-500 to-blue-400 text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center rounded-2xl mb-2 font-inter" >REDEFINE STATUS</h1>
                <p data-aos="fade-up" data-aos-delay="100" className="mb-16 text-center text-xl md:text-2xl font-semibold text-slate-950 dark:text-slate-100" >How We Can Correct Mankind&apos;s Leaderboard </p>
                <div className="h-1/4 w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent  dark:to-slate-900 to-slate-100" ></div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900" >
                <div id='problem' className=" overflow-hidden w-full max-w-screen-xl mx-auto pt-24 pb-36 px-4 md:px-10 relative" >
                    <h3 className='text-2xl sm:text-4xl text-slate-800 border-b pb-1 dark:border-amber-800 dark:text-slate-200 font-inter font-bold' >Overview of The Problem</h3>
                    <div className='mt-8' >
                        <img data-aos="zoom-out" className='md:max-w-sm lg:max-w-md xl:max-w-2xl w-full rounded-md shadow-lg md:float-right md:ml-5 mb-8 md:mb-5' src={image1} alt='image' />
                        <p className='text-slate-700 dark:text-slate-300' >The fact that our designer goods do not represent wealth for positive utility is having more negative damage to society than we can fathom. This article is going to help detail why, and detail our solution in progress. </p>
                        <p className='text-slate-700 dark:text-slate-300 mt-5' >As individuals, once we cover our basic needs, status becomes an intrinsic motivator in the rest of our actions. Status comes in many forms. The healthiest / most enlightened cultures put the highest status in rewarding positive sum behavior. In global culture, luxury goods like a Gucci bag/belt have become widespread as top status symbols, reflecting vapid use of money as the highest form of status. It has become such common Christmas list item for broke young teenagers that the <a href='https://www.businesstoday.in/visualstories/technology/who-is-bernard-arnault-meet-worlds-richest-person-alive-who-once-again-beat-elon-musk-24896-03-03-2023' target='_blank' rel='noreferrer' className='text-blue-600 dark:text-blue-500 hover:underline' >richest man on the planet</a> at the time of this writing got his riches from selling these overpriced goods representing nothing more than the ability to waste money. Collectively this misrepresentation of true status (service to others) is attributing more damage to building a healthy positive culture than we can imagine. </p>
                        <p className='text-slate-700 dark:text-slate-300 mt-5' >Social media, our emergent global cultural production system, could be used collectively to unify humanity around bettering ourselves and others. Instead it is used to further extract youth through a false form of <a href='https://www.eugenewei.com/blog/2019/2/19/status-as-a-service' target='_blank' rel='noreferrer' className='text-blue-600 dark:text-blue-500 hover:underline' >status as a service.</a> Imagine a world where this wasteful spending was considered cancelable. One where we collectively take accountability for the capability to money to the positive growth of us as a species. Imagine a world where the designer things we wore showed off spending a lot of money to make a lot of positive impact. If the world you imagined only went as far as to redistribute the wealth of designer wear, try imagining the deeper cultural effects this new alignment would have. </p>
                        <p className='bg-slate-200 dark:bg-slate-800 dark:text-slate-100 p-4 mt-6 rounded-md shadow-md italic ' >“Over the past hundred years we have increase the global GDP sevenfold, yet wealth inequality continues to skyrocket and luxury spending grows rapidly. In order to change the failure of redistribution of wealth at scale, we must effectively influence culture and help redefine what “status” is in the modern age. This will ultimately change the flow of money in society as the new age of status being helping the world, becomes more prominent. We have failed at building a society which healthily distributes wealth/power. Given society is a collective project we are responsible for, we think this stems from the culture not supporting doing good as the highest form of status.  We have more than enough resources, but many people without access to them, and a culture that motivates and glorifies overspending on vanity luxury goods.” <span className='not-italic font-semibold text-black dark:text-white' >- Jack Jay</span></p>
                    </div>
                </div>
            </div>
            <div className="h-36 w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent  dark:to-blue-950 to-blue-100" ></div>
        </div>
    )
}

export default SectionOne