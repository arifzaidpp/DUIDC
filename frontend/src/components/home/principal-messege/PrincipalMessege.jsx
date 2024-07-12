import React from "react";

const PrincipalMessege = () => {
  return (
    <>
      <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-4 justify-center items-stretch mt-4">
          <div className="w-full order-1">
            <div className="lg:hidden text-center mb-4">
              <h2 className="heading text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Principal's Message
              </h2>
              <div className="ev-heading-divider mb-2 -mt-2">
                <span className="inline-block w-60 h-[3px] bg-blue-800"></span>
              </div>
            </div>
            <img
              className="rounded-lg h-full object-cover"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="billboard image"
            />
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md flex flex-col justify-between order-2">
            <div className="hidden lg:block">
              <h2 className="heading text-4xl sm::text-lg md::text-2xl lg:text-3xl xl::text-4xl font-semibold text-gray-900 dark:text-white">
                Principal's Message
              </h2>
              <div className="ev-heading-divider mb-2 -mt-2">
                <span className="inline-block w-60 h-[3px] bg-blue-800"></span>
              </div>
            </div>
            <p className="text-md mt-4 flex-grow">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              placeat assumenda nam veritatis, magni doloremque pariatur quos
              fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat.
              Delectus hic error eligendi sed repellat natus fuga nobis tempora
              possimus ullam!
            </p>
            <figcaption className="font-medium pt-5">
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
