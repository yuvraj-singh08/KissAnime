import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center text-5xl  pt-5 animate-bounce">
        <h1 className=" text-white p-6">ANIME.xxx Speciality</h1>
      </div>

      <div className="flex justify-evenly bg-white pb-10 pt-8">
        <div className="flex">
          <div>
            <img
              className="w-[380px]"
              src="https://www.pngmart.com/files/5/Naruto-Shippuden-PNG-Free-Download.png"
              alt=""
            />
          </div>
          <div className="text-xs w-[425px] h-[60px] p-2 self-center mt-56 text-white font-extrabold bg-black  ml-[-400px]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores similique minus quos unde velit, quisquam dolore iure
              nobis inventore
            </p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img
              className="w-[380px]"
              src="https://www.pngmart.com/files/13/My-Hero-Academia-Katsuki-Bakugo-PNG-Pic.png"
              alt=""
            />
          </div>
          <div className="text-xs w-[425px] h-[60px] p-2 self-center mt-56 text-white font-extrabold bg-black  ml-[-400px]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores similique minus quos unde velit, quisquam dolore iure
              nobis inventore
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              className="w-[380px]"
              src="https://www.pngmart.com/files/13/Black-Clover-PNG-Transparent-Picture.png"
              alt=""
            />
          </div>
          <div className="text-xs w-[425px] h-[60px] p-2 self-center mt-56 text-white font-extrabold bg-black  ml-[-400px]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores similique minus quos unde velit, quisquam dolore iure
              nobis inventore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;