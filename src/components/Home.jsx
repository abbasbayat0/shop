const Home = () => {
    return (
        <div className="absolute left-8 top-44">
            {/* first section */}
            <div>
                <p className="text-white text-xl opacity-90">Shop Our Premium Auto Parts</p>
                <p className="text-white w-4/5 text-3xl font-bold mt-5">Build Your Dream Car To Day. Now 15% Off On All Items.</p>
                <button className="bg-[#ff3d24] rounded-full px-6 py-3 text-xl mt-10">Shop Now</button>
            </div>

            {/* second section */}
            <div className="absolute top-80 -left-2 w-full">
                <div className="flex items-center">
                    <img src={require("../images/carLogo2.png")} alt="car logo 2" className="w-32" />
                    <div className="w-[2px] h-14 ml-3 bg-[#ff3d24]"></div>
                    <p className="text-white ml-2 text-xl">Free Shopping <br /> <span className="text-base opacity-80">On All Orders Over 75$</span></p>
                </div>
                <div className="flex items-center mt-12">
                    <img src={require("../images/carLogo2.png")} alt="car logo 2" className="w-32" />
                    <div className="w-[2px] h-20 ml-3 bg-[#ff3d24]"></div>
                    <p className="text-white ml-2 text-xl">Tested & Proven <br /> <span className="text-base opacity-80">Highest Quality Testing Standards</span></p>
                </div>
                <div className="flex items-center mt-12">
                    <img src={require("../images/carLogo2.png")} alt="car logo 2" className="w-32" />
                    <div className="w-[2px] h-14 ml-3 bg-[#ff3d24]"></div>
                    <p className="text-white ml-2 text-xl">Customer Service <br /> <span className="text-base opacity-80">Available 24/7</span></p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;