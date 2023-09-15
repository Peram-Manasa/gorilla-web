import React from 'react'
import './Header.css';
import './Bias.css';
import './Offer.css';
import './Talent.css';
import './Champion.css'


const Header = () => {
  
  return (
    <>
    <div className='Quality'>
      <div className='Qua1'>
    <h1>Quality time for quality candidates.</h1>
    </div>
    <div className='Para'>
    <p>Boom. No more time wasted on screening CVs and pre-qualifying interviews.</p>
    <p>We automatically grade and rank your candidates. In the time it takes to savor a cup of coffee, you can watch video responses to custom questions.</p>
      <p>Our screening process automation lets you focus on the best people for the job.</p>
      </div>

       {/* <div className="Bias">
        <div className="biasimg">
          <img src="https://images.ctfassets.net/vztl6s0hp3ro/4FzrmdSMAy6HToOIC5sghF/477dbb260d15e509899d7acae0842fb5/man-percent__1_.png" />
        </div>
        <div className="biascontent">
            <h1>Say goodbye to unconscious bias.</h1>
            <p>Diverse teams perform better.</p>
            <p>With TestGorilla, you give all applicants an equal, unbiased opportunity to showcase themselves.</p>
            <p>This ensures you get the best talent from all walks of life.</p>

        </div>
      </div>

      <div className="offer">
        <div className="offerone">  
          <h1>Offer a positive candidate experience.</h1>
            <p>Offer a positive candidate experience.</p>
            <p>Our professional, well-designed tests serve as an extension of your brand and personality.</p>
            <p>Your applicants get the motivation and engagement they need to truly shine.</p>
        </div>
      </div>


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


   <div className='Talent'>
        <div className='talent1'>
            <h1>Top talent is priceless. We make finding it affordable.</h1>
            <p>A time-consuming screening process costs you a lot. Painful mis-hires cost you much, much more.</p>
            <p>With TestGorilla, you avoid all of this and see a huge return on investment every single year.</p>
            <p>Start screening with us today on our free plan.</p>
        </div>
        <div>
            <button className='btn1'>Talk to us</button>
            <button className='btn2'>Sign up free</button>
        </div>

    </div>  */}



   {/* Bias */}

   <div className="Bias">
        <div className="biasimg">
          <img src="https://images.ctfassets.net/vztl6s0hp3ro/4FzrmdSMAy6HToOIC5sghF/477dbb260d15e509899d7acae0842fb5/man-percent__1_.png" />
        </div>
        <div className="biascontent">
            <h1>Say goodbye to unconscious bias.</h1>
            <p>Diverse teams perform better.</p>
            <p>With TestGorilla, you give all applicants an equal, unbiased opportunity to showcase themselves.</p>
            <p>This ensures you get the best talent from all walks of life.</p>

        </div>
      </div>


      {/* Offer */}

      <div className="offer">
        <div className="offerone">  
          <h1>Offer a positive candidate experience.</h1>
            <p>Offer a positive candidate experience.</p>
            <p>Our professional, well-designed tests serve as an extension of your brand and personality.</p>
            <p>Your applicants get the motivation and engagement they need to truly shine.</p>
        </div>
      </div>

  {/* Champion */}

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

   {/* Talent */}
   <div className='Talent'>
        <div className='talent1'>
            <h1>Top talent is priceless. We make finding it affordable.</h1>
            <p>A time-consuming screening process costs you a lot. Painful mis-hires cost you much, much more.</p>
            <p>With TestGorilla, you avoid all of this and see a huge return on investment every single year.</p>
            <p>Start screening with us today on our free plan.</p>
        </div>
        <div>
            <button className='btn1'>Talk to us</button>
            <button className='btn2'>Sign up free</button>
        </div>

    </div>

 
      </div>
    </>
  )
}

export default Header
