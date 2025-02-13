

// import React from 'react'

// import Herosection from '../components/Herosection';
// import BeforeAfter from '../components/BeforeAfter';
// import HairTransPlantTreatment from '../components/HairTransPlantTreatment';
// import SkinTreatment  from '../components/SkinTreatment'

// import SkinTreatmentCard from '../components/SkinTreatmentCard';
// import DualScrollGallery from '../components/DualScrollGallery';
// import Form from '../components/Form';

// import About from '../components/About';
// import WhatsAppIcon from '../components/WhatsAppIcon'


// import { Helmet } from 'react-helmet-async';
// function HomePage() {
//   return (
//     <div className=' bg-backmain'>
       

//       <Herosection/>
//       <BeforeAfter/>
//       <WhatsAppIcon/>
     
    
//     <SkinTreatmentCard/>

//     <div className=' lg:flex lg:justify-center  md:gap-20'>
//     <HairTransPlantTreatment/>
//     <SkinTreatment/>
//     </div>

    
//      <DualScrollGallery/>
//      <About/>
//      <Form/>
   
    
   

//     </div>
//   )
// }

// export default HomePage







import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';


// Lazy load components
const Herosection = lazy(() => import('../components/Herosection'));
const BeforeAfter = lazy(() => import('../components/BeforeAfter'));
const HairTransPlantTreatment = lazy(() => import('../components/HairTransPlantTreatment'));
const SkinTreatment = lazy(() => import('../components/SkinTreatment'));
const SkinTreatmentCard = lazy(() => import('../components/SkinTreatmentCard'));
const DualScrollGallery = lazy(() => import('../components/DualScrollGallery'));
const Form = lazy(() => import('../components/Form'));
const About = lazy(() => import('../components/About'));
const WhatsAppIcon = lazy(() => import('../components/WhatsAppIcon'));

function HomePage() {

  


  return (


    <div className='bg-backmain'>
      



      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our homepage!" />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Herosection />
        <BeforeAfter />
        <WhatsAppIcon />

        <SkinTreatmentCard />

        <div className='lg:flex lg:justify-center md:gap-20'>
          <HairTransPlantTreatment />
          <SkinTreatment />
        </div>

        <DualScrollGallery />
        <About />
        <Form />
      </Suspense>
    </div>
  );
}

export default HomePage;
