import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 md:w-9/12  mx-auto text-center">
      <h1 className="font-jack text-white md:text-7xl sm:text-5xl text-3xl font-bold tracking-tight">
        Keep in touch with me Say Hi!
      </h1>
      <p className="text-white font-jack underline md:text-xl text-lg font-medium md:mt-16 mt-10 cursor-pointer">
        <a href="mailto:hello@ankitsoni.in"> hello@ankitsoni.in</a>
      </p>
    </div>
  );
};

export default Contact;
