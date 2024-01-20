// import { Container } from './Container'
// import React from 'react'

// interface RadialProgressBarProps {
//     percentage: number;
// }


// // const SkillsSection = () => {
// //   return (
// //     <section>
// //         <Container>
// //            <div className="relative w-[160px] h-[160px]">
// //                 <div className="w-[160px] h-[160px] bg-[#181818] border-transparent border-2 rounded-full shadow-c-md shadow-white-100 shadow-white">
// //                 
// //                 <div className="absolute inset-0 rounded-full h-[120px] w-[120px] mx-auto my-auto bg-[#121212] border-transparent border-2 shadow-i-md shadow-white"/>
// //                 </div>
// //            </div>

        
  //     <svg className="absolute inset-0 h-[160px] w-[160px]">
// //                     <div className="flex rounded-full mx-auto my-auto border-[20px] border-dasha border-dasho border-emerald-500"/>
// //                 </svg>
        
// //         </Container>
// //     </section>

// //   )
// // }
    
// //     export default SkillsSection

//     const RadialProgressBar: React.FC<RadialProgressBarProps> = ({ percentage }) => {
//         const radius = 80;
//         const circumference = 2 * Math.PI * radius;
//         const offset = circumference - (percentage / 100) * circumference;

//         return (
//             <svg className="w-16 h-16">
//                 <circle
//                     className="text-gray-300"
//                     cx="50%"
//                     cy="50%"
//                     r={radius}
//                     strokeWidth="10"
//                     strokeDasharray={`${circumference} ${circumference}`}
//                     strokeDashoffset="0"
//                 />
//                 <circle
//                     className="text-blue-500"
//                     cx="50%"
//                     cy="50%"
//                     r={radius}
//                     strokeWidth="10"
//                     strokeDasharray={`${circumference} ${circumference}`}
//                     strokeDashoffset={offset}
//                 />
//                 <text className="text-center text-gray-700 text-lg font-semibold" x="50%" y="50%">
//                     {percentage}%
//                 </text>
//             </svg>
//         );
//     };

//     export default RadialProgressBar;




//     /*  <div className="col-span-12 md:col-span-5">
//                 <div className="mt-10 md:mt-2">   
//                     <ProgressBar title="Figma" href="/figma.png" progress={90}  />
//                     <ProgressBar title="Git" href="/git.png" progress={40}  />
//                     <ProgressBar title="TypeScript" href="/typescript.png" progress={40}  />
//                     <ProgressBar title="React" href="/react.png" progress={60}  />
//                     <ProgressBar title="Javascript" href="/javascript.png" progress={70}  />
//                 </div>
//             </div>

//     */