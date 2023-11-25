const HeroSection = () => {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-amber-400 dark:from-rose-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-pink-400 to-rose-300 dark:to-rose-600" />
      </div>

      <div className="w-full h-screen flex justify-center items-center pt-10 px-6 md:px-12 xl:px-6">
        <div className="relative">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Sharpen your skills <span className="text-primary dark:text-white">Peaches Games</span></h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">Looking for a good place to practice Pymetrics Games before your job application? In here, try any of the games as many times as you want!</p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">Play now</span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
