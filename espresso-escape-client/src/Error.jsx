import error from '../src/assets/images/404/404.gif'

const Error = () => {
    return (
        <div className='text-center justify-center flex'>
            <img src={error} alt="" />
        </div>
    );
};

export default Error;