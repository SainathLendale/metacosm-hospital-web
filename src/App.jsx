











// import React from 'react'
// import { Route,Routes ,Link, } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

// import GallaryPage from './pages/GallaryPage';
// import  Contact  from './pages/Contact';
// import Navbar from './components/NavBar';

// import Form from './components/Form';


// import HairTransplant from './pages/HairTransplant';
// import SkinCareTreatmentsPage from './pages/SkinCareTreatmentsPage';
// import HairTraetmentPage from './pages/HairTraetmentPage';
// import Footer from './components/Footer';

// import ScrollToTop from "./components/ScrollToTop.jsx";



// import { Helmet, HelmetProvider } from 'react-helmet-async';
// //  const HomePage = lazy(()=>import("./pages/HomePage.jsx"))

// function App() {
  
//   return (
//     <div>
//       <HelmetProvider>
// <Navbar/>

// <ScrollToTop/>

//       <Routes>
//         <Route path="/" element={<HomePage/>}/>
//         <Route path='/About' element={<AboutPage/>} />
//         {/* <Route path='/services' element={<Servicespage/>} /> */}
//         <Route path='/Gallary' element={<GallaryPage/>} />
     
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/form' element={<Form/>} />
//         {/* <Route path='/hairTransplant' element={<HairTransplant/>} /> */}

        
//         <Route path='/hairTransplant' element={<HairTransplant/>} />
//         <Route path='/hairTreatment' element={<HairTraetmentPage/>} />
//         <Route path='/skincare' element={<SkinCareTreatmentsPage/>} />
      

       
       
//       </Routes>
//       </HelmetProvider>


      
//     <Footer/>

      
    
//     </div>
//   )
// }

// export default App


























import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GallaryPage = lazy(() => import('./pages/GallaryPage'));
const Contact = lazy(() => import('./pages/Contact'));
const Form = lazy(() => import('./components/Form'));
const HairTransplant = lazy(() => import('./pages/HairTransplant'));
const SkinCareTreatmentsPage = lazy(() => import('./pages/SkinCareTreatmentsPage'));
const HairTreatmentPage = lazy(() => import('./pages/HairTraetmentPage'));
const Navbar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

import { Helmet, HelmetProvider } from 'react-helmet-async';



function App() {




 



  return (
    <div>


      <HelmetProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Gallary' element={<GallaryPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/form' element={<Form />} />
            <Route path='/hairTransplant' element={<HairTransplant />} />
            <Route path='/hairTreatment' element={<HairTreatmentPage />} />
            <Route path='/skincare' element={<SkinCareTreatmentsPage />} />
          </Routes>
        </Suspense>
      </HelmetProvider>
      <Footer />
    </div>
  );
}

export default App;






