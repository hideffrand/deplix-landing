import React, { useEffect, RefObject } from "react";
import mobile from "./assets/deplix-mobile.png";
import laptop from "./assets/deplix-laptop.png";
import movies from "./assets/movies.png";

function App() {
  useEffect(() => {
    const images = document.querySelectorAll(
      ".header-image"
    ) as NodeListOf<HTMLImageElement>;
    const mobileRef = document.querySelector(".mobile") as HTMLImageElement;
    const laptopRef = document.querySelector(".laptop") as HTMLImageElement;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      images.forEach((image) => {
        image.style.transform = `translateX(-${scrollPosition}px)`;
      });
      mobileRef.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
      laptopRef.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full h-auto px-20 py-10 bg-transparent flex justify-end fixed z-10">
        <button className="bg-deplix-red px-6 py-4 rounded-full font-bold text-white hover:bg-deplix-black hover:text-white hover:border hover:border-deplix-red">
          Watch Now!
        </button>
      </nav>
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-deplix-red font-bold text-7xl md:text-10xl absolute z-10">
          DEPLIX
        </h1>
        <div className="hidden md:flex w-full h-auto overflow-x-hidden gap-6 bg-black">
          <img src={movies} alt="" className="header-image w-full" />
          <img src={movies} alt="" className="header-image w-full" />
        </div>
        <div
          className="w-full h-screen bg-left bg-cover block md:hidden"
          style={{ backgroundImage: `url(${movies})` }}
        ></div>
      </div>
      <main className="w-full h-screen bg-black flex items-center justify-around relative py-40">
        <p className="text-white w-1/4 text-xl md:text-4xl">
          Watch limitless TV Shows and Movies from around the world.
        </p>
        <p className="text-white w-1/4 text-xl md:text-4xl text-end">
          Any time, on any device.
        </p>
      </main>
      <section className="w-full h-screen bg-black flex justify-center items-center">
        <img
          src={laptop}
          alt=""
          className="laptop w-1/2 absolute left-0 ml-10 md:ml-40"
        />
        <img
          src={mobile}
          alt=""
          className="mobile w-1/3 md:w-1/4 absolute z-10 right-0 mr-10 md:mr-32"
        />
      </section>
      <section className="w-full h-auto bg-black justify-center items-center flex flex-col md:flex-row py-40">
        <div className="text-white md:w-1/2 ml-10 md:ml-0">
          <h1 className="text-4xl">Ready to watch?</h1>
          <p className="text-xl text-gray-300 md:w-1/2 my-10">Sign up now for free and enjoy our features to add your whatchlist, bookmarks, and favorite movies!</p>
        </div>
        <div className="flex gap-10">
          <button className="bg-deplix-black text-white px-12 py-4 rounded-full uppercase font-bold">Signup</button>
          <button className="bg-deplix-red text-white px-12 py-4 rounded-full uppercase font-bold">Login</button>
        </div>
      </section>
      <footer className="text-gray-400 w-full h-auto bg-black flex justify-between px-4 md:px-40 py-10 text-xs md:text-md">
        <p className="">Deplix @ 2023 | All Rights Reserved</p>
        <div className="flex flex-col items-end">
          by. hideffrand
          <div className="flex gap-4">
            <a className="hover:underline" href="https://github.com/hideffrand">Github</a>
            <a className="hover:underline" href="https://www.linkedin.com/in/deffrand-farera/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
