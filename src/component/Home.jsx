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
      <Element name="#Home">
        <div className=" h-screen sm:grid grid-cols-2 ">
          <div className="my-auto mx-auto sm:mx-24">
            <p>Hola, I`m as </p>
            <h5 className="text-4xl font-sans">Expert of </h5>
            <h1 className="text-5xl font-serif text-[#49243e]">Web and </h1>
            <h1 className="text-5xl font-serif px-10 text-[#49243e]">
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
              <button type="button" className="bg-[#f2613f] p-4 px-5 mx-1 py rounded-xl">
                <a href="http://">Here Me</a>
              </button>
              <button type="button" className="bg-[#f2613f] p-4 px-5 mx-1 py rounded-xl">
                {" "}
                <Link to="#Contatc" smooth={true}>
                  {" "}
                  Contact Me
                </Link>{" "}
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <img src={picture} width={500} alt="" srcSet="" className="" />
          </div>
        </div>
        <div className="grid grid-cols-4 mb-7 -my-20">
          <div className="mx-auto justify-items-center">
            <button className='bg-[#704264] p-4 rounded-full shadow-xl shadow-black '>
              <a href="https://wa.me/+6285793710978">
                <MdOutlineWhatsapp className="text-5xl text-blue-500" />
              </a>
            </button>
          </div>
          <div className="mx-auto justify-items-center">
            <button className='bg-[#704264] p-4 rounded-full shadow-xl shadow-black '>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <MdEmail className="text-5xl text-blue-500" />
              </a>
            </button>
          </div>
          <div className="mx-auto justify-items-center">
            <button className='bg-[#704264] p-4 rounded-full shadow-xl shadow-black '>
              <a href="https://github.com/HadiRachmat?tab=overview&from=2024-06-01&to=2024-06-25">
                <VscGithub className="text-5xl text-blue-500" />
              </a>
            </button>
          </div>
          <div className="mx-auto justify-items-center">
            <button className='bg-[#704264] p-4 rounded-full shadow-xl shadow-black '>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                <SiLinkedin className="text-5xl text-blue-500" />
              </a>
            </button>
          </div>
        </div>
      </Element>
    </>
  );
}
