// import Navbar from "../components/Navbar"

// export default function rank() {

//   return (
//           <div className="flex flex-col text-slate-100 h-screen w-full">
//             <div className=""><Navbar pageName="rank"/></div>
//             <div className="border h-[87%] m-2 ">
//               <div>
                
//               </div>
//             </div>
//           </div>

//   )
// }

// function Base64Image() {
//   return (
//     <div className="min-h-screen">
//       <img src={"data:image/png;base64,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"} alt="Your Image" />
//     </div>
//   );
// }

// export default Base64Image;


import React from 'react';
import UserRank from '../components/userRank';
import Navbar from "../components/Navbar";

export default function page() {
 return (

<div className="flex flex-col justify-between items-center h-screen min-h-screen min-w-screen object-cover">
      <div className="h-16 w-full Large:h-24"><Navbar pageName="RANK" /></div>
            <div className='h-[80%] min-h-[600px] medium:min-h-[700px] m-auto w-[410px] medium:w-[80%] mt-11  flex   items-center'>     
                  <UserRank   />
               
            </div>
            </div>
 );
}
