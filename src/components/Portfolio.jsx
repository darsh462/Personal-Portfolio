import React from "react";
import project3 from "../assets/portfolio/project-img3.png";
// import installNode from "../assets/portfolio/installNode.jpg";
import project2 from "../assets/portfolio/project-img2.jpeg";
import project1 from "../assets/portfolio/project-img1.png";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project3,
      names: "Network Packet Sniffer",
    },
    {
      id: 2,
      src: project1,
      names: "Data Summarizer",
    },
    {
      id: 3,
      src: project2,
      names: "Disease Predictor",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio(Projects)
          </p>
          <p className="py-6">Check out some of my Projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, names }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {names}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
