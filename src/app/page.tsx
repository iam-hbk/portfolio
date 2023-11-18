import Image from "next/image";
import profile from "../assets/Profile.png";
import splatter from "../assets/Splatter.png";
import splatter_svg from "../assets/Splatter.svg";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      <Image
        src={splatter_svg}
        height={500}
        width={500}
        alt="profile"
        className="absolute left-0 top-0 z-[-1] h-full w-full"
      />
      <Navbar />
      <div className="hero min-h-screen max-w-[90vw] items-start  pt-5">
        <div className="-red-500 hero-content  flex-col lg:flex-row-reverse lg:items-center">
          <Image src={profile} height={500} width={500} alt="profile" />
          <div className=" -green-500">
            <h1 className="text-7xl font-bold capitalize">Heritier Kaumbu</h1>
            <h2 className="text-3xl font-bold capitalize text-secondary">
              Software Developer
            </h2>
            <h2 className="text-3xl font-bold capitalize text-secondary">
              Designer
            </h2>
            <h2 className="text-3xl font-bold capitalize text-secondary">
              Teacher
            </h2>
            <p className="py-6">
              Dive into the vibrant world of my software development journey!
              This portfolio is a curated showcase of my proficiency in
              JavaScript, React, and Python, featuring a rich gallery of diverse
              projects 🚀.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
