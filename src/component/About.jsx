import { Element } from "react-scroll";
import "../App.css";
import AboutPicture from "../assets/img/about-picture.jpeg";
export default function About() {
  return (
    <> 
      <Element name="#About" className="h-screen sm:my-0 mb-20 pt-20">
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
              className="mx-auto object-cover object-top sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] rounded-full"
            />
          </div>
          <div className="my-auto text-center">
            <h3 className="text-3xl font-serif"> Hadi Rachmat S </h3>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              animi magni culpa eveniet laborum excepturi sit dignissimos fuga
              reiciendis atque aliquid dolorem obcaecati cum doloremque sunt
              enim molestiae, nobis vero? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis sapiente exercitationem, eius sint id
              possimus. Et voluptatum eaque debitis at facilis cumque, excepturi
              ipsum ratione, voluptatem eveniet ab omnis illo.
            </p>
            <button type="button" className="bg-[#F2613F] p-3 px-8 rounded-md hover:bg-[#49243E] hover:text-white hover:duration-500 active:animate-bounce active:delay-1000">
              My Resume
            </button>
            <div>
              <h1 className=" relative sm:text-[500px] text-[400px] bottom-[350px] sm:bottom-[300px] -z-10 opacity-20"> 02 </h1>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
