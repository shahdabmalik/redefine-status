import image1 from "../../assets/image1.webp"
import image2 from "../../assets/image2.webp"

const SectionTwo = () => {
    return (
        <div className=' bg-blue-200 dark:bg-blue-800/40 relative' >
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 pb-36" >
                <h3 className='text-2xl sm:text-4xl text-blue-900 dark:text-blue-400 border-b pb-1 border-blue-400 dark:border-blue-800 font-inter font-bold' >A Deeper Dive:</h3>
                <div className="mt-8 text-slate-700 dark:text-slate-200" >
                    <p className="text-slate-700 dark:text-slate-200" >On a fundamental level once someone gets the basics covered as in food, water, shelter. They can start to spend their time and money on convenience, health, and purpose but more often than not; status is where a majority of surplus wealth goes. </p>
                    <img src={image1} alt="image" className="sm:max-w-sm lg:max-w-md xl:max-w-lg w-full rounded-md shadow-lg sm:float-right sm:ml-5 mt-5 mb-8 sm:mb-5" />
                    <p className=" mt-5" >Societally we lack an alignment of our status symbols with creating a better world and with bettering ourselves. This idea to change what we cultural see as status has been referred to as “Status Engineering”.</p>
                    <p className=" mt-5" >What we wear is the most direct way we have to represent ourselves and our ideals/values. What your role model wears, or any person of influence is shaping the idea of status in that child, teenager, or adults mind.</p>
                    <p className=" mt-5 font-semibold" >Status is what we are buying when we pay $1, $10, or even $500 extra for a certain brand of T-Shirt irrespective of comfort.</p>
                    <p className=" mt-5" >The problem is not that buying status is a failure mode of an individual. Status is a form of positive competitive drive in society and a tool for respect attribution. That’s why you see Dior shoes in economy. This is not a miscalculation, currently the status from spending $1100 on shoes does have more long term value than things like first class because we are playing the game of unenlightened capitalism.</p>
                    <p className=" mt-5" >The problem is that we support the status symbol which costs $1100 and does no good for humanity.  Thus this expenditure is not a failure of the buyer who bought status, it is only misguided that we do not have designer shoes that cost $1100, which builds a literal house in Bangladesh (a small home can be built as a permanent structure for someone for this amount).  We need higher forms of status to exist in order to progress our culture which will aid in the distribution of wealth and power on a systemic level. </p>
                    <img src={image2} alt="image" className="sm:max-w-sm lg:max-w-md xl:max-w-lg w-full rounded-md shadow-lg sm:float-left sm:mr-5 mt-5 mb-8 sm:mb-5" />
                    <p className=" mt-5" >Once higher status objects are unveiled will these purely financial status seems become recognized for their tackiness and buying status will coincide with doing good. With no better alternative currently, we idolize symbols of wealth. Thus, on our highest display of who we are, **the clothing we wear**, we display 0 creativity or care for the world in spending and instead promote wasting wealth for the sake of power/leverage over others, and then we wonder why society is misaligned to building a healthy world. Fashion, what we wear, is the biggest signal we have in representing our identity and values.</p>
                    <p className=" mt-5" >If we can provide a better representation of status in clothing we can not only change the money used to buy status into doing good for the world, but we can change our core representation of status in society towards doing good.</p>
                    <p className=" mt-5" >While the larger belief is that this systemic change is the real impact in realigning our culture towards true status, the amount of funds in status spending that could be redirected towards positive causes is also no joke.</p>
                    <p className="mt-5" >The personal luxury goods market is projected to grow from USD <a href="https://www.fortunebusinessinsights.com/luxury-goods-market-103866" target="_blank" rel="noreferrer" className="dark:text-blue-400 text-blue-700  hover:underline" >257.26 billion in 2020 to USD 352.84 billion in 2027</a> </p>
                    <p className="mt-5" >The Luxury Cars Market size is expected to grow from <a href="https://www.globenewswire.com/en/news-release/2022/09/19/2518123/0/en/Luxury-Cars-Market-Size-Worth-USD-655-0-Billion-Globally-by-2027-at-9-3-CAGR.html#:~:text=The%20Luxury%20Cars%20Market%20size,9.3%25%20from%202020%20to%202027.&text=Pune%2C%20India%2C%20Sept.,by%20the%20end%20of%202027." target="_blank" rel="noreferrer" className="dark:text-blue-400 text-blue-700  hover:underline" >USD 449.7 Billion in 2019 to USD 655.0 Billion by 2027; It is estimated to grow at a CAGR of 9.3% from 2020 to 2027. </a> </p>
                    <p className=" mt-5" >Aligning status culturally on a global scale means reattributing that wealth towards benefit for humanity and shifting the entire global view of wealth. </p>
                </div>
            </div>
            <div className="h-36 w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent dark:to-green-900 to-green-200" ></div>
        </div>
    )
}

export default SectionTwo