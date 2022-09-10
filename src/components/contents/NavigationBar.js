import React, { useState } from "react";
import calender from "../assets/images/icon-calendar.svg";
import todo from "../assets/images/icon-todo.svg";
import planning from "../assets/images/icon-planning.svg";
import reminders from "../assets/images/icon-reminders.svg";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [row, setRow] = useState(false);
  const [row2, setRow2] = useState(false);

  return (
    <>
      {isOpen && (
        <div className=" bg-opacity-50 bg-black/30 w-full h-full top-0 bottom-0 fixed"></div>
      )}
      <div className=" bg-transparent relative">
        <div className=" flex flex-col lg:flex-row py-4 px-6">
          <div className=" flex px-4 justify-between ">
            <div>
              <a href="#" className=" font-kumbh font-bold  text-4xl">
                snap
              </a>
            </div>
            <div className=" lg:hidden z-40">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none block lg:hidden "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    className={!isOpen ? " block" : " hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />

                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex flex-col z-20 lg:flex-row font-kumbh rounded-xl shadow-xl bg-white shadow-xl lg:shadow-none lg:relative absolute justify-between w-3/4 h-screen top-0 right-0 lg:h-auto lg:w-full py-4 lg:py-0`}
            >
              <div className=" pt-20 lg:pt-0 flex flex-col lg:flex-row">
                <button
                  onClick={() => setRow(!row)}
                  className="px-4 py-2 flex flex-col"
                >
                  <div className=" flex items-center">
                    Features
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          className={!row ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                        <path
                          className={row ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`${
                      row ? "block" : "hidden"
                    } flex text-left z-30 ml-6 lg:ml-0 space-y-2 font-kumbh flex-col rounded-xl shadow-xl lg:absolute bg-white py-2 mt-6`}
                  >
                    <a href="#" className=" px-1 flex items-center ">
                      <img src={todo} alt="todo" className=" w-3 h-3 mr-2" />
                      Todo Llist
                    </a>
                    <a href="#" className=" px-1 flex items-center">
                      <img
                        src={calender}
                        alt="todo"
                        className=" w-3 h-3 mr-2"
                      />
                      Calendar
                    </a>
                    <a href="#" className=" px-1 flex items-center ">
                      <img
                        src={reminders}
                        alt="todo"
                        className=" w-3 h-3 mr-2"
                      />
                      Reminders
                    </a>
                    <a href="#" className=" px-1 flex items-center ">
                      <img
                        src={planning}
                        alt="todo"
                        className=" w-3 h-3 mr-2"
                      />
                      Planning
                    </a>
                  </div>
                </button>
                <button
                  onClick={() => setRow2(!row2)}
                  className="px-4 py-2 flex flex-col"
                >
                  <div className=" flex items-center">
                    Company
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          className={!row2 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                        <path
                          className={row2 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`${
                      row2 ? "block" : "hidden"
                    } flex text-left z-30 ml-6 lg:ml-0 font-kumb  flex-col rounded-xl shadow-xl lg:absolute space-y-2 bg-white py-2 mt-6`}
                  >
                    <a href="#" className="px-2 ">
                      History
                    </a>
                    <a href="#" className="px-2 ">
                      Our Team
                    </a>
                    <a href="#" className="px-2 ">
                      Blog
                    </a>
                  </div>
                </button>
                <a href="#" className="px-4 py-2 ">
                  Careers
                </a>
                <a href="#" className="px-4 py-2 ">
                  About
                </a>
              </div>
              <div className=" flex flex-col  lg:space-x-4 items-center text-center lg:flex-row mx-4">
                <a href="#" className="px-4 py-2 ">
                  Login
                </a>
                <button className=" w-full outline rounded-xl px-4 py-2 hover:bg-black hover:text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
