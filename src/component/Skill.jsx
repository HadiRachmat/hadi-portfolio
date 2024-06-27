import "../App.css";
import { Element } from "react-scroll";

export default function Skill() {
  return (
    <>
      <Element name="#Skill" className="h-screen pt-20 mb-10">
        <div className="">
          <div className="text-center text-[100px] font-serif">
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
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
                </div>
                {/* end-javascript  */}
                {/* reactjs */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    React JS
                  </h3>
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
                </div>
                {/* end-reactjs */}
                {/* Node JS */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    Node JS
                  </h3>
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
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
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
                </div>
                {/* end-english-langguage */}
                {/* english langguage */}
                <div className="flex justify-between items-center py-2">
                  <h3 htmlFor="Html" className=" font-semibold">
                    Arabic
                  </h3>
                  <span className=" font-semibold"> 85% </span>
                </div>
                <div className="flex w-full h-3 bg-gray-900 rounded-full">
                  <div className=" flex bg-sky-600 w-[85%] rounded-full"></div>
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
          <h1 className="text-[400px] relative -top-[300px] sm:-top-[450px] -z-10 opacity-20"> 03 </h1>
        </div>
      </Element>
    </>
  );
}
