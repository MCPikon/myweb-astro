import { isOpen, goBack } from "@/utils/nav";
import { useStore } from "@nanostores/react";
import { getI18N, getI18NPath } from "@/i18n"
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function PageNav(props: { currentLocale: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  const $isOpen = useStore(isOpen);
  let currentLocale = props.currentLocale
  const i18n = getI18N({ currentLocale })

  return (
    <>
      <header className="mt-6 z-50">
        <div>
          <div className="flex sm:gap-8 gap-4">
            <button
              onClick={goBack}
              className="px-3 flex items-center w-12 py-2 bg-primary bg-opacity-10 text-primary rounded-xl text-xl transition-all ease-in-out md:hover:bg-opacity-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary size-6" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </button>
            <h1 className="px-3 w-full py-2 bg-primary bg-opacity-10 text-primary rounded-xl text-xl font-extrabold text-center">
              {props.title}
            </h1>
            <button
              onClick={() => isOpen.set(!$isOpen)}
              id="menuButton"
              className="flex items-center gap-4 bg-primary bg-opacity-10 px-4 rounded-xl transition-all ease-in-out md:hover:bg-opacity-20"
            >
              <svg
                className="stroke-primary h-6"
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
                  <path
                    d="M4 6H20M4 12H14M4 18H9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {$isOpen ? (
        <div
          id="menuItem"
          data-aos="zoom-in"
          className="absolute z-50 w-full sm:w-96 right-0 top-16 rounded-xl h-auto bg-black bg-opacity-100"
        >
          <div className="flex flex-col justify-center items-center gap-4 px-4 m-4 py-4">
            <a
              className="w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold"
              href={getI18NPath(currentLocale, "")}
            >
              {i18n.INDEX_AND_PAGE_NAV_LINK_1}
            </a>
            <a
              className="w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold"
              href={getI18NPath(currentLocale, "#about")}
            >
              {i18n.INDEX_AND_PAGE_NAV_LINK_3}
            </a>
            <a
              className="w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold"
              href={getI18NPath(currentLocale, "#experience")}
            >
              {i18n.INDEX_AND_PAGE_NAV_LINK_4}
            </a>
            <a
              className="w-full py-2 bg-primary text-center rounded-xl bg-opacity-10 hover:bg-opacity-5 text-primary font-bold"
              href={currentLocale == "en" ? "/cv_en.pdf" : "/cv.pdf"}
              target="_blank"
            >
              {i18n.INDEX_AND_PAGE_NAV_LINK_5}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
