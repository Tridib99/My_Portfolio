// import React from 'react'

// const RadialGradientBackground = ({variant='hero',gradients=[]}) => {

//   const variants = {
//     hero: [
//       {
//         position:'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
//         size: 'w-[1400px] h-[1400px]',
//         colors: [
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.5)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//         ],
//         blur:'0px',
//         opacity: 0.5,
//       },
//       {
//         position:'top-1 left-1',
//         size: 'w-[1400px] h-[1400px]',
//         colors: [
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.5)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//         ],
//         blur:'0px',
//         opacity: 0.5,
//       },
//       {
//         position:'bottom-1 right-1',
//         size: 'w-[1400px] h-[1400px]',
//         colors: [
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.5)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//         ],
//         blur:'0px',
//         opacity: 0.5,
//       },
//     ],
//     about: [
//       {
//         position:'bottom-0 left-[75%]',
//         size: 'w-[700px] h-[700px]',
//         colors: [
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.5)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.45)', stop: '100%'},
//           {color: 'rgba(141,255,105,0.25)', stop: '100%'},
//         ],
//         blur:'0px',
//         opacity: 0.5,
//       },
//     ],
//   };


//   const activeGradients = variant === 'custom' 
//   ? gradients 
//   : variants[variant] ?? variants.hero ?? [];
//   const generateGradient = (colors = []) => {
//     const colorStops = colors.map(({color, stop}) => `${color} ${stop}`).join(', ');
//     return `radial-gradient(circle at center, transparent 0% , transparent 30%,  ${colorStops}, transparent 60%, transparent 100% ) `;
//   };
  
    

      
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {activeGradients.map((gradient, index) => (
//         <div
//           key={index}
//           className={`absolute ${gradient.position} ${gradient.size} rounded-full}`}
//           style={{
//             background: generateGradient(gradient.colors),
//             filter: `blur(${gradient.blur})`,
//             opacity: gradient.opacity,
//           }}
//         />
//       ))}
      
//     </div>
//   )
// }


// export default RadialGradientBackground 

//...................................................................................................................................




// import React from 'react'

// const RadialGradientBackground = () => {


  
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">

//       {/* left glow */}
//       <div
//         className="absolute -top-[30%] -left-[20%] w-[900px] h-[900px] rounded-full blur-3xl"
//         style={{
//           background:
//             'radial-gradient(circle, rgba(141,255,105,0.25) 0%, transparent 70%)',
//         }}
//       />

//       {/* right glow */}
//       <div
//         className="absolute -bottom-[30%] -right-[20%] w-[900px] h-[900px] rounded-full blur-3xl"
//         style={{
//           background:
//             'radial-gradient(circle, rgba(141,255,105,0.25) 0%, transparent 70%)',
//         }}
//       />

//       {/* center line glow */}
//       <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[220px] h-full bg-green-400/10 blur-3xl" />
      
//     </div>
//   )
// }

// export default RadialGradientBackground

//...................................................................................................................................

import React from 'react'

const RadialGradientBackground = ({ variant = 'hero' }) => {

  const variants = {

    hero: [
      {
        className:
          'absolute inset-y-0 left-1/2 -translate-x-1/2 w-[220px] bg-green-500/10 blur-3xl',
      },

      {
        className:
          'absolute -top-[300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl bg-green-500/10',
      },
    ],

    about: [
      {
        className:
          'absolute top-20 -left-[300px] w-[700px] h-[700px] rounded-full blur-3xl bg-emerald-500/10',
      },

      {
        className:
          'absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full blur-3xl bg-green-500/5',
      },
    ],

    projects: [
      {
        className:
          'absolute top-20 -right-[300px] w-[700px] h-[700px] rounded-full blur-3xl bg-lime-500/10',
      },
    ],

    contact: [
      {
        className:
          'absolute -bottom-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl bg-green-500/10',
      },
    ],
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variants[variant]?.map((item, index) => (
        <div key={index} className={item.className} />
      ))}
    </div>
  )
}

export default RadialGradientBackground

