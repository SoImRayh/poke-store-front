import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/ca/4d/23/ca4d2391455ade48053c0b6861842574.gif)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div id="projetos" className="min-h-screen bg-green-400"></div>
      <div id="sobre" className="min-h-screen bg-red-400"></div>
      <div id="experiências" className="min-h-screen bg-cyan-400"></div>
    </div>
  );
}
