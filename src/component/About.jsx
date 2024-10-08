import { Element } from "react-scroll";
import "../App.css";
import AboutPicture from "../assets/img/about-picture.jpeg";
export default function About() {
  return (
    <>
      <Element
        name="#About"
        className="h-screen sm:my-0 mb-20 sm:mb-0 pt-20 sm:pt-0"
      >
        <h5 className=" sm:pt-20 pb-10 text-center text-[80px] font-serif">
          {" "}
          About Me
          <span>
            {" "}
            <hr className=" w-52 bg-black h-1 mx-auto" />
          </span>
        </h5>
        <div className=" sm:grid sm:grid-cols-2">
          <div className="mx-auto">
            <img
              src={AboutPicture}
              alt="picture"
              srcSet=""
              className="mx-auto object-cover object-top sm:w-[350px] sm:h-[350px] mb-10 w-[200px] h-[200px] rounded-full"
            />
          </div>
          <div className="my-auto text-center sm:text-left">
            <h3 className="text-3xl font-serif"> Hadi Rachmat S </h3>
            <p className="py-5">
              Holla.. My name is Hadi Rachmat Supindar, I was Born on july, 8,
              2001 at sukabumi city Now i live on Sukabumi city, West java Of
              Indonesia. My Current activities are as Student At Sukabumi
              Muhammadiyah University, My other job is as a freelance worker in
              the field of informatics and then i as an active student majoring
              in informatics engineering
            </p>
            <button
              type="button"
              className="bg-[#F2613F] p-3 px-8 rounded-md hover:bg-[#49243E] hover:text-white hover:duration-500 active:animate-bounce active:delay-1000"
            >
              <a href="https://drive.google.com/file/d/18RAsJ9F5fZqFo4jeB4Xm4ihXSrbdkedt/view?usp=sharing">
                My Resume
              </a>
            </button>
            <div>
              <h1 className=" relative sm:text-[500px] text-[350px] bottom-[350px] sm:bottom-[400px] -z-10 opacity-20 text-center right-2">
                {" "}
                02{" "}
              </h1>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
