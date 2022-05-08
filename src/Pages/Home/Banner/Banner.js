import bannerImg from '../../../images/slider-1.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerImg})`
        }} className="px-[80px] xs:px-4 sm:px-10 bg-no-repeat bg-cover bg-center xs:bg-left sm:bg-left flex justify-end items-center h-[500px]">
            <div className="w-5/12 xs:w-full sm:w-full">
                <p className=" underline font-extralight">Headphone</p>
                <h1 className="text-5xl font-extralight py-4">Just to<br />rock your mood</h1>
                <p>8 items left</p>
                <button className="px-4 py-1 bg-orange-600 text-white mt-5">Manage</button>
            </div>
        </div>
    );
};

export default Banner;