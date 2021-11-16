const NavBar = () => {
  return (
    <div className="border-b-2 border-gray-200 shadow-sm " >

        <div className="flex justify-between w-11/12 mx-auto">
          <div className="h-16 w-50  flex items-center justify-center cursor-pointer ">
            <img className="h-7" src="workwise_logo.png" alt="" />
          </div>
          <div className="cursor-pointer  flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/118803124_3204782552950543_4383631436472711149_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEm-Nn7leZDUIT9v86Vj3PfbenJRw146P5t6clHDXjo_k2YxthF2xk-xrPi1GLh-Y9gG76ldvTnet95jPdSRjHd&_nc_ohc=-EYslRLfYY8AX9e-f07&_nc_ht=scontent-frt3-1.xx&oh=c8a928774f8232b6dc9b96294b9d8a4a&oe=61B91D1D"
              alt=""
            />
            <div className="flex items-center gap-1">
                <h2>Saif</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
            </div>
          </div>{" "}
        </div>
  
    </div>
  );
};

export default NavBar;
