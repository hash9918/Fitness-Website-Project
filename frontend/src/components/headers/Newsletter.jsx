import React from "react";

function Newsletter() {
  return (
    <div className="flex flex-col justify-center gap-6 items-center h-[350px] text-black dark:text-white">
      <div className=" w-[500px] text-center leading-tight font-bold opacity-90">
        {" "}
        <h1 className=" text-[30px] ">
          {" "}
          Want us to email you with the latest blockbuster news?
        </h1>
      </div>
      <form className="w-full max-w-lg">
        <div className="flex items-center border bg-gray-200 rounded-full dark:bg-black border-secondary ">
          <input
            className="appearance-none  border-none w-full bg-gray-200 ml-3 dark:text-white dark:bg-black   mr-3  px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="example@company.com"
            aria-label="Full name"
          />
          <button
            className="h-[47px] bg-secondary hover:bg-[#00008B] text-sm  text-white py-1 px-5 rounded-full"
            type="button"
          >
            Subscribe
          </button>
         
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
