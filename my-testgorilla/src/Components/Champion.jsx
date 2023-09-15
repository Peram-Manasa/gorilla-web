import React from 'react'
 import'./Champion.css';
export const Champion = () => {
  return (
   <>
   <div className='champion'>
    

    <div>
        <img src='https://images.ctfassets.net/vztl6s0hp3ro/7buIEsrRBP9NKWn85sHiED/199ea2deb1fa1cc0a4d2648adbfa2941/TestGorilla_people-conection-2023.resized.png.webp'/>
    </div>

    <div className='champ'>
        <h1>Champion a data-driven HR culture.</h1>
        <p>We rank your applicants according to test scores certified by our experts. This means your HR team can rely on good data to make important decisions – and not just their gut feeling.</p>
        <p>With TestGorilla, you’ll lead the shift to a more professional and data-focused HR culture in your company.</p>
         <button>Learn More</button>
    </div>
   </div>
   </>
  )
}
