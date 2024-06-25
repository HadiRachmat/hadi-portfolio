import "../App.css";
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <>
      <div className=" ">
        {" "}
        <div className="relative">
          <nav className="fixed top-0 left-0 right-0 mt-5">
            <ul className=" bg-[#49293E] flex justify-items-center justify-center xl:mx-96 rounded-full p-2">
              <button type="button" className="m-5"><Link to="#Home" smooth={true} className="p-5 px-2 text-white hover:bg-[#DBAFA0] duration-200 rounded-full">Home</Link></button>
              <button type="button" className="m-5"><Link to="#About" smooth={true} className="p-5 px-2 text-white hover:bg-[#DBAFA0] duration-200 rounded-full">About</Link></button>
              <button type="button" className="m-5"><Link to="#Skill" smooth={true} className="p-5 px-4 text-white hover:bg-[#DBAFA0] duration-200 rounded-full">Skill</Link></button>
              <button type="button" className="m-5"><Link to="#Contact" smooth={true} className="p-5 px-1 text-white hover:bg-[#DBAFA0] duration-200 rounded-full">Contact</Link></button>
              <button type="button" className="m-5"><Link to="#Footer" smooth={true} className="p-5 px-2 text-white hover:bg-[#DBAFA0] duration-200 rounded-full">Footer</Link></button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
