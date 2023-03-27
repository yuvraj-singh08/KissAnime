import React, { useState, useEffect } from "react";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("sessionToken");
    if (status) {
      console.log("Logged in");
      setLoginStatus(true);
    }
  }, []);

  function logout() {
    localStorage.removeItem("sessionToken");
    setLoginStatus(false);
  }

  return (
    <div>
      <div className="flex text-xs justify-between items-center bg-black ">
        <div>
          <h1 className="text-white float-left pl-8 text-sm sm:text-base sm:px-16 md:px-20 lg:text-lg">
            AINME.XXX
          </h1>
        </div>

        <ul className="flex space-x-3 py-3 text-xs  text-white whitespace-nowrap pr-8 sm:text-base sm:px-8 sm:space-x-8 md:px-20 md:text-base md:space-x-10 lg:text-lg lg:px-24 lg:space-x-16 xl:text-lg xl:px-24 xl:space-x-16">
          <li className=" hover:text-black hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-white">
            {" "}
            <a className="hover:text-black hover:no-underline" href="/">
              {" "}
              HOME{" "}
            </a>
          </li>
          <li className=" hover:text-black hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-white">
            {" "}
            <a className="hover:text-black hover:no-underline" href="#">
              {" "}
              EXPLORE{" "}
            </a>
          </li>
          <li className=" hover:text-black hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-white">
            {" "}
            <a className="hover:text-black hover:no-underline" href="#">
              {" "}
              WATCH LIST{" "}
            </a>
          </li>
          {!loginStatus ? (
            <li className=" hover:text-black hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-white">
              {" "}
              <a
                className="hover:text-black hover:no-underline"
                href="/authentication"
              >
                {" "}
                Login/SignUp{" "}
              </a>
            </li>
          ) : (
            <li
              onClick={logout}
              className=" hover:text-black hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-white"
            >
              {" "}
              <a
                className="hover:text-black hover:no-underline"
                href="/authentication"
              >
                {" "}
                Logout{" "}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
