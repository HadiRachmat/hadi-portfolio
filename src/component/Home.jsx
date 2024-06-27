import { Element } from "react-scroll";
import "../App.css";
import picture from "../assets/img/picture.png";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <Element name="#Home" className="sm:h-screen pt-28" >
        <div className="sm:grid sm:grid-cols-2  ">
          <div className=" sm:text-left text-center sm:my-auto mx-auto sm:mx-24">
            <p>Hola, I`m as </p>
            <h5 className="text-4xl font-sans">Expert of </h5>
            <h1 className="text-5xl font-bold font-serif text-[#49243e]">
              Web and{" "}
            </h1>
            <h1 className="text-5xl font-bold font-serif px-8 text-[#49243e]">
              Mobile Developer{" "}
            </h1>
            <p className="py-5">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              exercitationem iure ducimus quisquam. Molestiae nostrum harum,
              obcaecati sint quasi iusto quia. Earum, ex. Inventore officiis
              mollitia aperiam. Libero, ad at.
            </p>
            <div className="">
              <button
                type="button"
                className="bg-[#f2613f] p-4 px-5 mx-1 rounded-xl hover:bg-[#49243E] hover:text-[#DBAFA0] hover:duration-500 active:bg-[#f2613f] active:duration-0"
              >
                <a href="http://">Here Me</a>
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
              <h1 className=" -z-10 sm:text-[500px] text-[400px] absolute top-[600px] sm:top-[200px] opacity-20">01</h1>
            </div>
          </div>
          <div className="sm:mx-auto sm:mt-5 mx-20">
            <img src={picture} width={450} alt="" srcSet="" className="" />
          </div>
        </div>
        <div className=" flex sm:-mt-10">
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
