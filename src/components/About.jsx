import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I am Darshnil Sinh Rana from SRM-UNIVERSITY and currently
          studying in pre-final Year. I am a very passionate developer having
          interest in Full Stack Development Technologies like MERN Stack.
          A Machine Learning Enthusiast who has developed
          several Projects over the years. You can view them in Projects
          Section. Learning new-technologies is so much fun and I try to upgrade my skill
          set every day. I have also participated in various hackathons which
          have always contributed towards learning something new in a short
          period of time and teaching me leadership and teamwork.
        </p>
        <br />
        <p className="text-xl">
          Besides Development I have a big heart for Programming. I am a
          Competitive Coder too. Participated in various Div-3, Div-2
          Competitions on CodeForces and Codechef. A max rating of 3 star on
          codeChef and a rating of 1200 on Codeforces. Solved over 300+ problems
          on various platforms. If you would like to connect with me kindly drop
          me an E-mail!
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
