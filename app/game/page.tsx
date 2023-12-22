import Navbar from "../components/Navbar"
import MatchHist from "../components/MatchHist"

export default function Game() {

  return (
          <div className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Navbar pageName="Game"/></div>
            <div className="border h-[87%] m-2 ">
              <div>
                {/* <MatchHist/> */}
              </div>
            </div>
          </div>

  )
}