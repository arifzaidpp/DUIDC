import React from "react";

const PrincipalMessege = () => {
  return (
    <>
      <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full">
            <img
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="billboard image"
            />
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md flex flex-col">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Principal's Message
            </h2>
            <p className="text-md mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              placeat assumenda nam veritatis, magni doloremque pariatur quos
              fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat.
              Delectus hic error eligendi sed repellat natus fuga nobis tempora
              possimus ullam!
            </p>
            <figcaption className="font-medium mt-auto">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-400">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrincipalMessege;
