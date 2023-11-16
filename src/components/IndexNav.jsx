import { useState } from "react";
export default function IndexNav() {
  const [show, isShow] = useState(false);

  return (
    <>
      <div id="hamburger" className=" relative z-50">
        <div className="">
          <div className="fixed right-[-10px] top-[50%] rotate-[270deg]">
            <div className="">
              <div className="w-full">
                <button 
                aria-label="menuButton"
                onClick={() => {isShow(!show)}}
                className="bg-primary  font-bold px-4 py-1 rounded-t-xl cursor-pointer">
                  
                  {
                    show ?
                    <svg className="h-4" height="1em"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
                    :
                    <svg className="h-4" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></g></svg>
                    
                  }
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      {
        show ?
        <div className=" overflow-y-none  transition-transform ease-in-out delay-150">
        <div className={` animate-menu -z-10 top-[0px] left-[0px]  fixed bg-secondary  h-[100%] custom w-[100%]`}>
          <div className=" h-[100%] custom w-[100%] flex items-center justify-center">
            <ul className="flex flex-col text-4xl font-bold text-center space-y-10">
              <a onClick={() => isShow(false)} aria-label="Home" href="/">Inicio</a>
              <a onClick={() => isShow(false)} aria-label="projects" href="/projects">Proyectos</a>
              <a onClick={() => isShow(false)} aria-label="about" href="/#about">Sobre mí</a>
              <a className="flex items-center" target="_blank" href="/cv.pdf">
                <svg className="h-12 me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" /></svg>
                Descargar CV
              </a>
            </ul>
          </div>
        </div>
      </div>
      : null
      }
      </div>
    </>
  );
}
