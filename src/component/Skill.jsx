import "../App.css";
import { Element } from "react-scroll";

export default function Skill() {
  return (
    <>
      <Element name="#Skill" className="h-screen pt-20 mb-10 sm:mb-0">
        <div className="">
          <div className="text-center text-[90px] font-serif">
            <h1> My Skill </h1>
          </div>
          <div className="grid grid-rows-2 sm:grid sm:grid-cols-2">
            <div className="pt-5">
              <div className="mx-10 ">
                {/* html css */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    HTML + CSS
                  </h3>
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
                </div>
                {/* end Html Css */}
                {/* javascript */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    JavaSript
                  </h3>
                  <span className=" font-semibold"> 80% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[80%] rounded-full"></div>
                </div>
                {/* end-javascript  */}
                {/* reactjs */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    React JS
                  </h3>
                  <span className=" font-semibold"> 75% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[75%] rounded-full"></div>
                </div>
                {/* end-reactjs */}
                {/* Node JS */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    Node JS
                  </h3>
                  <span className=" font-semibold"> 60% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[60%] rounded-full"></div>
                </div>
                {/* end-NodeJS */}
              </div>
            </div>
            <div className="pt-5">
              <div className="mx-10">
                {/* design */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    Design
                  </h3>
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
                </div>
                {/* end-design */}
                {/* english langguage */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    English
                  </h3>
                  <span className=" font-semibold"> 70% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[70%] rounded-full"></div>
                </div>
                {/* end-english-langguage */}
                {/* english langguage */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    Arabic
                  </h3>
                  <span className=" font-semibold"> 50% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[50%] rounded-full"></div>
                </div>
                {/* end-english-langguage */}
                {/* english langguage */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    MysQl
                  </h3>
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
                </div>
                {/* end-english-langguage */}
              </div>
            </div>
          </div>
          <h1 className="sm:text-[500px] text-[350px] relative -top-[300px] sm:-top-[600px] -z-10 opacity-20 right-2 sm:right-0"> 03 </h1>
        </div>
      </Element>
    </>
  );
}
