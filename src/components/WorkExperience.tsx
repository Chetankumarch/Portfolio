import {Boxes} from "../components/ui/background-boxes"

export default function workexp(){
  return(
    <div id="workexp" className=" h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-10">
    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <Boxes />

      {/* <div className="container bg-grey mx-auto w-full h-full"> */}
          <div className="relative wrap overflow-hidden z-20 pb-10 h-full">
          <h2 className="text-white text-4xl text-center pb-10">Work Experience</h2>
              <div className="border-4 absolute border-opacity-20 h-full border" style={{ left: '50%', borderColor: '#3498db' }}></div>
              {/* right timeline */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12">
                      <div className="text-right text-white">Sep 2022 - Present</div> {/* Date from */}
                  </div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 className="mb-3 font-bold text-gray-800 text-xl">ThinkLabs.io</h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                      <div className="text-gray-600">Dec 2022</div> {/* Date to */}
                  </div>
              </div>

              {/* left timeline */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12">
                      <div className="text-left text-gray-600">Feb 2023</div> {/* Date from */}
                  </div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                  </div>
                  <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                      <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                      <div className="text-white">Present</div> {/* Date to */}
                  </div>
              </div>
          </div>
      {/* </div> */}
    </div>
  );
}
