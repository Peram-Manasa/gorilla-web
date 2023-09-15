import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div  className='imagefooter'>
        <img src='https://www.testgorilla.com/_next/static/media/logo.564b6e14.svg' />
        <p>© TestGorilla 2023. All rights reserved.</p>
     </div>
     <div className='blaw'>
 <div className='footerone'>
        <a href="/">Help center</a><br/>
        <a href="/">Information for candidates</a><br/>
        <a href="/">For subject-matter experts</a>
    </div>
 <div className='footersecond'> 
        <a href="/">Careers <p>Hiring</p></a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
    </div>

    <div className='footerthree'>
        <a href="/">Legal stuff</a>
        <a href="/">Privacy policy</a>
        <a href="/"> Sitemap</a>
    </div> 
    </div>
    
    {/* Images */}
    <div className='iii'>
     <div className='imagess'>
        <img src="https://images.ctfassets.net/vztl6s0hp3ro/3tXVl0ezn0rUgFyyXybNBg/c627b86f53fe4d10d32b3363157078d9/Security_Compliance_logo_1_96x96.png" alt="" /><br/>
        <img src="https://images.ctfassets.net/vztl6s0hp3ro/3cioFcutrmY62oTNtsOGUt/9088508a7107e38dea704ca2b767f098/Footer_G2-Logos-Fall-2023.svg" alt="" />
     </div>
     </div>

     <div className='lastfoot'>
        <p>
        We use cookies to offer you a great experience, remember your preferences, analyze site traffic, and serve targeted advertisements. By continuing to use this website, you consent to the use of cookies in accordance with our Cookie Policy
        </p>
     </div>


    </div>
    </>
  )
}

export default Footer