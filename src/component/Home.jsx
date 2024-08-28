import { Element } from "react-scroll";
import "../App.css";
import picture from "../assets/img/picture.png";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-scroll";
import TypeText from "../hooks/TypeText";

export default function Home() {
  return (
    <>
      <Element name="#Home" className="sm:h-screen pt-28 sm:pt-0">
        <div className="sm:grid sm:grid-cols-2  ">
          <div className="sm:text-left text-center sm:my-auto mx-auto sm:mx-24">
            <p>Hola, I`m as </p>
            <h5 className="text-4xl font-sans">Expert of </h5>
            <h1 className="cursor text-5xl font-bold font-serif text-[#49243e]">
              <TypeText text="Weeb and" />
            </h1>
            <h1 className="text-5xl font-bold font-serif px-8 text-[#49243e]">
             <TypeText text=" mMobile developer"/>
            </h1>
            <p className="py-5">
              {" "}
              Let me introduce myself, my name is Hadi Rachmat S, I am a student and freelancer in the field of informatics. and this is a simple personal website,
            </p>
            <div className="">
              <button
                type="button"
                className="bg-[#f2613f] p-4 px-5 mx-1 rounded-xl hover:bg-[#49243E] hover:text-[#DBAFA0] hover:duration-500 active:bg-[#f2613f] active:duration-0"
              >
                <a href="https://wa.me/085793710978">Here Me</a>
              </button>
              <Link to="#Contact" smooth={true}>
                <button
                  type="button"
                  className="bg-[#f2613f] p-4 px-5 mx-1 rounded-xl hover:bg-[#49243E] hover:text-[#DBAFA0] hover:duration-500 active:bg-[#f2613f] active:duration-0"
                >
                  {" "}
                  Contact Me
                </button>
              </Link>{" "}
              <h1 className=" -z-10 sm:text-[500px] text-[350px] absolute top-[600px] sm:top-[200px] opacity-20">
                01
              </h1>
            </div>
          </div>
          <div className="sm:mx-auto sm:mt-5 mx-20">
            <img
              src={picture}
              width={450}
              alt=""
              srcSet=""
              className="sm:w-[500px]"
            />
          </div>
        </div>
        <div className=" flex sm:-mt-20">
          <div className="mx-auto justify-items-center">
            <button className="bg-[#704264] p-4 rounded-full shadow-xl shadow-black ">
              <a href="https://wa.me/+6285793710978">
                <MdOutlineWhatsapp className="text-4xl text-blue-500" />
              </a>
            </button>
          </div>
          <div className="mx-auto justify-items-center">
            <button className="bg-[#704264] p-4 rounded-full shadow-xl shadow-black ">
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <MdEmail className="text-4xl text-blue-500" />
              </a>
            </button>
          </div>
          <div className="mx-auto justify-items-center">
            <button className="bg-[#704264] p-4 rounded-full shadow-xl shadow-black ">
              <a href="https://github.com/HadiRachmat?tab=overview&from=2024-06-01&to=2024-06-25">
                <VscGithub className="text-4xl text-blue-500" />
              </a>
            </button>
          </div>
          <div className="mx-auto justify-items-center">
            <button className="bg-[#704264] p-4 rounded-full shadow-xl shadow-black ">
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                <SiLinkedin className="text-4xl text-blue-500" />
              </a>
            </button>
          </div>
        </div>
      </Element>
    </>
  );
}
