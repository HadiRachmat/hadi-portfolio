import { Element } from "react-scroll";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { useState } from "react";
import axios from "axios";

import "../App.css";
export default function Contact() {
  const [formdata, setFormData] = useState({
    to:"",
    subject:"",
    text:""
  })

  const handleEmail = (e) =>{
    setFormData({...formdata,[e.target.name]:e.target.value})
  }

  const handleSubmitEmail = async (e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/', formdata);
      alert('Email sent successfully!');
    } catch (e) {
      alert("send email is failure")
    }
  }
  return (
    <>
      <Element name="#Contact" >
        <div className="h-screen mb-[130%] sm:mb-[15%] pt-24">
          <div className=" ">
            <h1 className="text-[50px] text-center font-serif"> Contact Me</h1>
            <div className="flex justify-center pb-3">
              <hr className="w-16 sm:w-20 h-0.5 bg-black"/>
              <p className="text-center"> Do Anything for Me, <br />then i can do it</p>
              <hr className="w-16 sm:w-20 h-0.5 bg-black"/>

            </div>
          </div>
          <div className=" sm:grid sm:grid-cols-2">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.09968825577624!2d106.92146786886462!3d-6.914797457254697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6849002b3650af%3A0x9154ab53f875dcfd!2sRumahnya%20Rachmat!5e0!3m2!1sid!2sid!4v1719406215907!5m2!1sid!2sid"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mx-auto w-[300px] h-[300px] sm:w-[450px] sm:h-[350px]"
              ></iframe>
              <div className="">
                <div className="flex py-2 justify-center">
                  <MdOutlineEmail className="text-4xl" />
                  <a href="hadirahmat712@gmail.com" className="px-5">
                    {" "}
                    hadirahmat712@gmail.com
                    <span>
                      {" "}
                      <hr className="w-50 h-0.5 bg-black" />
                    </span>
                  </a>
                </div>
                <div className="flex py-2 justify-center">
                  <FaGithub className="text-4xl" />
                  <a href="hadirahmat712@gmail.com" className="px-5">
                    {" "}
                    hadirahmat712@gmail.com
                    <span>
                      {" "}
                      <hr className="w-50 h-0.5 bg-black" />
                    </span>
                  </a>
                </div>
                <div className="flex py-2 justify-center">
                  <FaWhatsapp className="text-4xl" />
                  <a href="hadirahmat712@gmail.com" className="px-5">
                    {" "}
                    hadirahmat712@gmail.com
                    <span>
                      {" "}
                      <hr className="w-50 h-0.5 bg-black" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <form action="" className="px-5" onSubmit={handleSubmitEmail}>
                <div className="py-2">
                  <label htmlFor="full_name"> YOUR EMAIL </label>
                  <input
                    type="email"
                    name="to"
                    className="w-full h-9 border-2 border-gray-500 rounded-md p-2.5 focus:ring-blue-500 focus:ring-1 focus:border-none"
                    placeholder="Enter Your Email"
                    value={formdata.to}
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="full_name" className="my-2"> SUBJECT </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full h-9 border-2 border-gray-500 rounded-md p-2.5 focus:ring-blue-500 focus:ring-1 focus:border-none"
                    placeholder="Enter Your subject"
                    value={formdata.subject}
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="message"> MESSAGE </label>
                  <textarea
                    name="text"
                    id=""
                    cols={30}
                    rows={10}
                    className="border-gray-500 border-2 w-full rounded-md bg-transparent p-2.5"
                    value={formdata.text}
                    onChange={handleEmail}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="p-2.5 px-10 bg-sky-500 rounded-md mx-5"
                >
                  {" "}
                  Submit{" "}
                </button>
              </form>
              <div className="relative text-center sm:text-left">
                <h1 className="sm:text-[500px] text-[350px] absolute -bottom-[250px] -z-10 opacity-20 font-serif right-1.5">04</h1>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
