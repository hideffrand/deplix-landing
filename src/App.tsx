import { useEffect } from "react";
import mobile from "./assets/deplix-mobile.png";
import laptop from "./assets/deplix-laptop.png";
import movies from "./assets/movies.png";
import pc from "./assets/deplix-pc.png";

function App() {
  useEffect(() => {
    const marqueeImages = document.querySelectorAll(".marquee") as NodeListOf<HTMLImageElement>;
    const mobileRef = document.querySelector(".mobile") as HTMLImageElement;
    const laptopRef = document.querySelector(".laptop") as HTMLImageElement;
    const pcRef = document.querySelector(".pc") as HTMLImageElement;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      marqueeImages.forEach((image) => {
        const animationDuration = `${Math.abs(scrollPosition) * 0.1}s`;
        image.style.animationDuration = animationDuration;
      });

      if (scrollPosition === 0) {
        marqueeImages.forEach((image) => {
          image.style.animationDuration = "20s";
        });
      }

      laptopRef.style.transform = `translateY(-${
        scrollPosition * 0.4
      }px) translateX(-${scrollPosition * 0.04}px)`;
      mobileRef.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
      pcRef.style.transform = `translateY(-${
        scrollPosition * 0.4
      }px) translateX(${scrollPosition * 0.04}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full h-auto px-4 md:px-20 py-10 bg-transparent flex justify-between items-center fixed z-20">
        <h1 className="text-deplix-red font-bold text-xl md:text-2xl">DEPLIX</h1>
        <button className="bg-deplix-red md:px-10 px-4 py-2 text-sm rounded-md font-semibold text-white hover:bg-deplix-black hover:text-white hover:border hover:border-deplix-red">
          WATCH NOW
        </button>
      </nav>
      <div className="w-full flex flex-col items-center justify-center relative">
        <h1 className="text-white font-bold text-xl md:text-4xl absolute z-10 text-center md:w-1/2">
          Watch limitless TV Shows and Movies from around the world.
        </h1>

        {/* image streched in mobile */}
        <div className="flex w-auto h-screen gap-6 bg-black overflow-x-hidden">
          {Array.from({ length: 15 }).map((_, index) => (
            <img
              key={index}
              src={movies}
              alt=""
              className="marquee object-contain w-full brightness-50"
            />
          ))}
        </div>
        <div className="absolute text-white animate-bounce bottom-0 flex flex-col justify-center items-center">
          Scroll Down
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
      <main className="w-full h-screen bg-black flex items-center justify-around relative py-40">
        <div className="text-white text-center absolute z-20 px-20">
          <h1 className="font-bold text-2xl md:text-4xl">
            Watch it anywhere, on any device.
          </h1>
          <p className="text-xl md:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </main>
      <section className="mock-section hidden md:flex w-full h-auto bg-black flex-col md:flex-row justify-center items-center gap-10">
        <img
          src={laptop}
          alt="Deplix Mock Laptop"
          className="laptop w-1/2 md:w-1/4"
        />
        <img
          src={mobile}
          alt="Deplix Mock Mobile"
          className="mobile w-1/2 md:w-1/6"
        />
        <img src={pc} alt="Deplix Mock PC" className="pc w-1/2 md:w-1/4" />
      </section>
      <section className="Deplix mock-section md:hidden w-full h-auto bg-black flex flex-col md:flex-row justify-center items-center gap-10">
        <img
          src={laptop}
          alt="Deplix Mock Laptop"
          className="laptop w-1/2 md:w-1/4"
        />
        <img
          src={mobile}
          alt="Deplix Mock Mobile"
          className="mobile w-1/2 md:w-1/6"
        />
        <img src={pc} alt="Deplix Mock PC" className="pc w-1/2 md:w-1/4" />
      </section>
      <section className="w-full h-auto bg-black justify-center items-center flex flex-col md:flex-row py-40">
        <div className="text-white md:w-1/2 ml-10 md:ml-0">
          <h1 className="text-4xl">Ready to watch?</h1>
          <p className="text-xl text-gray-300 md:w-1/2 my-10">
            Sign up now for free and enjoy our features to add your whatchlist,
            bookmarks, and favorite movies!
          </p>
        </div>
        <div className="flex gap-10">
          <button className="bg-deplix-black text-white px-12 py-4 rounded-md uppercase font-bold">
            Signup
          </button>
          <button className="bg-deplix-red text-white px-12 py-4 rounded-md uppercase font-bold">
            Login
          </button>
        </div>
      </section>
      <footer className="text-gray-400 w-full h-auto bg-black flex justify-between px-4 md:px-20 py-10 text-xs md:text-md">
        <p className="">Deplix @ 2023 | All Rights Reserved</p>
        <div className="flex flex-col items-end">
          by. hideffrand
          <div className="flex gap-4">
            <a className="hover:underline" href="https://github.com/hideffrand">
              Github
            </a>
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/deffrand-farera/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
