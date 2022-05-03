import bannerImg from '../../../images/slider-1.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerImg})`
        }} className="px-[80px] bg-no-repeat bg-cover bg-center flex justify-end items-center h-[500px]">
            <div className="w-5/12">
                <p className=" underline font-extralight">Headphone</p>
                <h1 className="text-5xl font-extralight py-4">Just to<br />rock your mood</h1>
                <button className="px-4 py-1 bg-yellow-300 text-black mt-5">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;