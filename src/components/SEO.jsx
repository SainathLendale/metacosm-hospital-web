// import React from 'react'
// import { Helmet } from 'react-helmet-async'
// const SEO: React.FC<{title: string, description: string}> = ()=> {
//   return (
//     <Helmet>
//     <title>{title}</title>
// <meta name='description' content={description}  />
//   </Helmet>

//   )
// }

// export default SEO;



import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

export default SEO;


