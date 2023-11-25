import Image from "next/image";

const Infos = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-12 xl:px-6">
      <div className="md:w-2/3 lg:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.357 31.357" fill="currentColor" className="w-6 h-6 text-primary">
          <g>
            <path d="M15.255,0c5.424,0,10.764,2.498,10.764,8.473c0,5.51-6.314,7.629-7.67,9.62c-1.018,1.481-0.678,3.562-3.475,3.562
              c-1.822,0-2.712-1.482-2.712-2.838c0-5.046,7.414-6.188,7.414-10.343c0-2.287-1.522-3.643-4.066-3.643
              c-5.424,0-3.306,5.592-7.414,5.592c-1.483,0-2.756-0.89-2.756-2.584C5.339,3.683,10.084,0,15.255,0z M15.044,24.406
              c1.904,0,3.475,1.566,3.475,3.476c0,1.91-1.568,3.476-3.475,3.476c-1.907,0-3.476-1.564-3.476-3.476
              C11.568,25.973,13.137,24.406,15.044,24.406z"/>
          </g>  
        </svg>
        
        <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          A game-designed to measure cognitive and emotional traits
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          A series of online assessments designed to measure cognitive and emotional traits. Participants engage in a set of interactive challenges or tasks within a specified time frame. The games collect behavioral data related to aspects such as attention, memory, and risk aversion.
        </p>
      </div>

      <div
        className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3"
      >
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="/assets/joystick.png"
              className="h-12 w-auto"
              width="512"
              height="512"
              alt="joystick"
            />

            <div className="space-y-2">
              <h5
                className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
              >
                Enjoyable
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Games designed for you to have fun while developing your skills
              </p>
            </div>

            <a href="#" className="flex items-center justify-between group-hover:text-secondary">
              <span className="text-sm">Play now</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>                
            </a>
          </div>
        </div>

        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="/assets/brain.png"
              className="h-12 w-auto"
              width="512"
              height="512"
              alt="brain"
            />

            <div className="space-y-2">
              <h5
                className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
              >
                Capture cognitive and emotional traits
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Improving how individuals approach problem-solving, decision-making, and other relevant skills
              </p>
            </div>

            <a href="#" className="flex items-center justify-between group-hover:text-secondary">
              <span className="text-sm">Play now</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>                
            </a>
          </div>
        </div>

        <div
          className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
        >
          <div
            className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
          >
            <Image
              src="/assets/variety.png"
              className="h-12 w-auto"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5
                className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
              >
                More games
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Various types of games for you to pick from
              </p>
            </div>

            <a href="#" className="flex items-center justify-between group-hover:text-secondary">
              <span className="text-sm">Play now</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>                
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
