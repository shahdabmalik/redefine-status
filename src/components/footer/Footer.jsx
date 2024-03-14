
const Footer = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-4 md:px-10 bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex justify-between flex-wrap gap-8 pb-16' >
            <div>
                <h4 className='font-semibold text-lg' >PARTNERS</h4>
                <div className='flex flex-col gap-2 mt-4 text-sm' >
                    <a href='https://systemicaltruism.com' target='_blank' rel="noreferrer" className='hover:underline' >Systemic Altruism</a>
                    <a href='https://dia.wiki' target='_blank' rel="noreferrer" className='hover:underline' >Decentralized Intelligence Agency</a>
                    <a href='https://purplerock.xyz' target='_blank' rel="noreferrer" className='hover:underline' >Purplerock </a>
                    <a href='http://mooworldorder.org' target='_blank' rel="noreferrer" className='hover:underline' >Moo World Order</a>
                    <a href='https://secreteservice.com' target='_blank' rel="noreferrer" className='hover:underline' >Secrete Service</a>
                </div>
            </div>
            <div>
                <h4 className='font-semibold text-lg' >OPPURTUNITIES</h4>
                <div className='flex flex-col gap-2 mt-4 text-sm' >
                    <a href='http://startupcollege.io' target='_blank' rel="noreferrer" className='hover:underline' >Apply To Join Startup College</a>
                    <a href='https://persistventures.com/investor-application' target='_blank' rel="noreferrer" className='hover:underline' >Invest In Impact Focused Ventures</a>
                    <a href='https://aiccelerator.org' target='_blank' rel="noreferrer" className='hover:underline' >Join Our Ai Accelerator</a>
                    <a href='https://effectiveaccelerator.com' target='_blank' rel="noreferrer" className='hover:underline' >Join Our General Accelerator</a>
                    <a href='https://apps.apple.com/us/app/holy-vible/id6444683138' target='_blank' rel="noreferrer" className='hover:underline' >Download Holy Vible On IOS</a>
                    <a href='https://play.google.com/store/apps/details?id=com.subverse.vible' target='_blank' rel="noreferrer" className='hover:underline' >Download Holy Vible On Playstore</a>
                </div>
            </div>
            <div>
                <h4 className='font-semibold text-lg' >VENTURE ECOSYSTEM:</h4>
                <div className='flex flex-col gap-2 mt-4 text-sm' >
                    <a href='https://persistventures.com' target='_blank' rel="noreferrer" className='hover:underline' >Persist Ventures</a>
                    <a href='https://4rf.org' target='_blank' rel="noreferrer" className='hover:underline' >Fourth Revolution Fund</a>
                </div>
            </div>
        </div>
    )
}

export default Footer