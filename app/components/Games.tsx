import Image from "next/image";

const Games = () => {
  return (
    <div className="relative py-16">
      <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-amber-400 dark:from-rose-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-pink-400 to-rose-300 dark:to-rose-600" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Games</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Pick one and try it out
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl z-20 bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image src=""
              alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Coming soon
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Coming soon
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Play now</span>
              </a>
            </div>
            
          </div>

          <div className="group p-6 sm:p-8 rounded-3xl z-20 bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image src=""
              alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Coming soon
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Coming soon
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Play now</span>
              </a>
            </div>
          </div>

          <div className="group p-6 sm:p-8 rounded-3xl z-20 bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image src=""
              alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Coming soon
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Coming soon
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Play now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
