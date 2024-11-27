import insta1 from '../src/assets/images/cups/Rectangle 9.png'
import insta2 from '../src/assets/images/cups/Rectangle 10.png'
import insta3 from '../src/assets/images/cups/Rectangle 11.png'
import insta4 from '../src/assets/images/cups/Rectangle 12.png'
import insta5 from '../src/assets/images/cups/Rectangle 13.png'
import insta6 from '../src/assets/images/cups/Rectangle 14.png'
import insta7 from '../src/assets/images/cups/Rectangle 15.png'
import insta8 from '../src/assets/images/cups/Rectangle 16.png'


const InstaHome = () => {
    return (
        <div className="w-4/5 mx-auto">
            <div className='text-center py-10'>
                <h1 className="text-[#331a15] text-2xl font-semibold font-rancho md:text-4xl">Follow on Instagram</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20">
                <img src={insta1} alt="" />
                <img src={insta2} alt="" />
                <img src={insta3} alt="" />
                <img src={insta4} alt="" />
                <img src={insta5} alt="" />
                <img src={insta6} alt="" />
                <img src={insta7} alt="" />
                <img src={insta8} alt="" />
            </div>
        </div>
    );
};

export default InstaHome;