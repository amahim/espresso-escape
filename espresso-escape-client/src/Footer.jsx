import { FaFacebookSquare, FaInstagramSquare, FaPhone, FaTwitterSquare } from 'react-icons/fa';
import '../src/Footer.css'
import logo from '../src/assets/images/more/logo1.png'
import { FaLocationPin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <div className="footer-css">
            <div className='w-4/5 mx-auto md:flex-row gap-4 md:gap-0 flex-col flex md:justify-between justify-start items-center md:py-20 py-16'>
                {/* link div */}
                <div className='w-full md:w-[50%] space-y-4'>
                    <img src={logo} alt=""  className='w-12 h-12 md:w-14 md:h-14' />
                    <h1 className='text-[#331a15] text-xl font-semibold font-rancho md:text-3xl'>Espresso Escape</h1>
                    <p className='text-black'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-2 items-center text-[#331a15]'>
                        <p><FaFacebookSquare className='w-10 h-10'></FaFacebookSquare></p>
                        <p><FaInstagramSquare className='w-10 h-10'></FaInstagramSquare></p>
                        <p><FaTwitterSquare className='w-10 h-10'></FaTwitterSquare></p>
                    </div>
                    <h1 className='text-[#331a15] text-xl font-semibold font-rancho md:text-3xl'>Get in Touch</h1>
                    <div className='flex gap-2 items-center'>
                        <p><FaPhone className='text-[#331a15]'></FaPhone></p>
                        <h1 className='text-black'>+880-123456789</h1>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p><MdEmail className='text-[#331a15]'></MdEmail></p>
                        <h1 className='text-black'>Espresso@escape.com</h1>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p><FaLocationPin className='text-[#331a15]'></FaLocationPin></p>
                        <h1 className='text-black'>72, Wall street, King Road, Dhaka</h1>
                    </div>
                </div>
                {/* form div */}
                <div className='w-full md:w-[45%] space-y-4'>
                    <h1 className='text-[#331a15] text-xl font-semibold font-rancho md:text-3xl'>Contact With Us</h1>
                    <form className='flex flex-col gap-4'>
                        <input type="text" name="" id="" placeholder='name' className='bg-white py-3 px-2 rounded-xl  '/>
                        <input type="email" name="" id="" placeholder='email'
                        className='bg-white py-3 px-2 rounded-xl'/>
                        <textarea type-="text" placeholder="write here" id=""
                        className='bg-white py-3 px-2 rounded-xl '></textarea>
                        <button className='w-44 py-1 border-2 border-[#331a15]  rounded-full text-[#331a15] text-xl font-rancho'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;