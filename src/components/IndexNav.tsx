import { useState } from "react";
import { getI18N, getI18NPath } from "@/i18n"

export default function IndexNav(props: { currentLocale: string | undefined; }) {
  let currentLocale = props.currentLocale
  const [show, isShow] = useState(false);
  const i18n = getI18N({ currentLocale })

  return (
    <>
      <div id="hamburger" className=" relative z-50">
        <div className="">
          <div className="fixed right-[-10px] top-[50%] rotate-[270deg]">
            <div className="">
              <div className="w-full">
                <button
                  aria-label="menuButton"
                  onClick={() => {
                    isShow(!show);
                  }}
                  className="bg-primary  font-bold px-4 py-1 rounded-t-xl cursor-pointer transition-all ease-in-out md:hover:bg-blue-400"
                >
                  {show ? (
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {show ? (
          <div className="overflow-y-none transition-transform ease-in-out delay-150">
            <div
              className={`animate-menu -z-10 top-[0px] left-[0px] fixed bg-secondary h-[100%] custom w-[100%]`}
            >
              <div className="h-full flex items-center justify-center">
                <ul className="flex flex-col text-4xl font-bold text-center space-y-10">
                  <a className="md:hover:underline" onClick={() => isShow(false)} aria-label="Home" href={getI18NPath(currentLocale, "")}>
                    {i18n.INDEX_AND_PAGE_NAV_LINK_1}
                  </a>
                  <a
                    className="md:hover:underline"
                    onClick={() => isShow(false)}
                    aria-label="projects"
                    href={getI18NPath(currentLocale, "projects")}
                  >
                    {i18n.INDEX_NAV_LINK_2}
                  </a>
                  <a
                    className="md:hover:underline"
                    onClick={() => isShow(false)}
                    aria-label="about"
                    href={getI18NPath(currentLocale, "#about")}
                  >
                    {i18n.INDEX_AND_PAGE_NAV_LINK_3}
                  </a>
                  <a
                    className="md:hover:underline"
                    onClick={() => isShow(false)}
                    aria-label="experience"
                    href={getI18NPath(currentLocale, "#experience")}
                  >
                    {i18n.INDEX_AND_PAGE_NAV_LINK_4}
                  </a>
                  <a
                    className="flex justify-center items-center gap-x-2 md:hover:underline"
                    target="_blank"
                    rel="noopener"
                    href={currentLocale == "en" ? "/cv_en.pdf" : "/cv.pdf"}
                  >
                    <svg
                      className="size-12"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      <path d="M12 17v-6" />
                      <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
                    </svg>
                    {i18n.INDEX_AND_PAGE_NAV_LINK_5}
                  </a>
                  <a 
                    className="flex justify-center items-center gap-x-2 md:hover:underline"
                    href={currentLocale == "en" ? "/" : "/en"}>
                    <svg
                      className="size-12"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 5h7" />
                      <path d="M7 4c0 4.846 0 7 .5 8" />
                      <path d="M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143" />
                      <path d="M12 20l4 -9l4 9" />
                      <path d="M19.1 18h-6.2" />
                    </svg>
                    {i18n.INDEX_NAV_LINK_6}
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
