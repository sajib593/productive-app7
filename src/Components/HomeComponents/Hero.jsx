

import phone from "./../../assets/hero.png"

const Hero = () => {
    return (
       <section className="w-full  pt-12 pb-20">

      {/* Top Section */}

      <div className="flex flex-col items-center justify-center text-center px-6 lg:px-16">
        <img
          src={phone}
          alt="App preview"
          className="w-[90%] max-w-[450px] drop-shadow-2xl"
        />
      </div>





      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] text-white py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Downloads */}
          <div>
            <h3 className="text-4xl font-bold">29.6M</h3>
            <p className="mt-2 opacity-90 text-sm">Total Downloads</p>
            <p className="text-xs opacity-70 mt-1">
              21% More Than Last Month
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-4xl font-bold">906K</h3>
            <p className="mt-2 opacity-90 text-sm">Total Reviews</p>
            <p className="text-xs opacity-70 mt-1">
              46% More Than Last Month
            </p>
          </div>

          {/* Active Apps */}
          <div>
            <h3 className="text-4xl font-bold">132+</h3>
            <p className="mt-2 opacity-90 text-sm">Active Apps</p>
            <p className="text-xs opacity-70 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;