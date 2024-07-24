import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


import "../App.css";

export default function Footer() {
  return (
    <>
      <Element name="#Footer" className="">
        <div className="pt-28">
          <div>
            <div className="flex justify-center">
              <a href="https://github.com/HadiRachmat/"><FaGithub className=" px-2 text-5xl text-blue-500"/></a>
              <a href="https://www.instagram.com/hadi.rachmat01/?next=%2F"><FaInstagram className=" px-2 text-5xl text-blue-500"/></a>
              <a href="https://www.linkedin.com/in/hadi-rachmat-s-4266921b6/"><CiLinkedin className=" px-2 text-5xl text-blue-500"/></a>
              <a href="https://hadirahmat712@gmail.com"> <MdEmail className=" px-2 text-5xl text-blue-500"/></a>
            </div>
            <div>
              <h3 className="text-sm text-center"> Created By Hadi Rachmat Supindar</h3>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
