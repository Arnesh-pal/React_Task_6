import React from "react";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, I am Arnesh Pal. I am learning Web Development as of now.
          </p>
          <p className="pb-5">
            I am proficient in HTML, CSS and Javascript
          </p>

          <p>In backend I am learning MongoDB, Django</p>
        </div>
      </div>
    </section>
  );
};

export default About;
