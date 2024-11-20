// 'use client'
// import React, { useEffect } from 'react';
// import '@/style/Sticky.css'; // Create this file and move CSS there if you prefer

// const StickyHeader = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.getElementById('myHeader');
//       const sticky = header.offsetTop;

//       if (window.scrollY > sticky) {
//         header.classList.add('sticky');
//       } else {
//         header.classList.remove('sticky');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//       </div>

//       <div className="header" id="myHeader">
//         <h2>My Header</h2>
//       </div>

//       <div className="content">
//         <h3>On Scroll Sticky Header</h3>
//         <p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p>
//         <p>Some text to enable scrolling..</p>
//         {/* Add more paragraphs if needed */}
//       </div>
//     </div>
//   );
// };

// export default StickyHeader;

// 'use client'
// import React from 'react';
// import '@/style/Sticky.css'; // Create this CSS file and add the styles below

// const Sticky = () => {
//   return (
//     <div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//       </div>

//       <div className="header">
//         <h2>My Header</h2>
//       </div>

//       <div className="content">
//         <h3>On Scroll Sticky Header</h3>
//         <p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p>
//         <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         <p>More content...</p>
//         {/* Add more content as needed */}
//       </div>
//     </div>
//   );
// };

// export default Sticky;

// 'use client'
// import React from 'react';
// import StickyHeadroom from '@integreat-app/react-sticky-headroom';

// const MyHeader = () => {
//   return (
//     <StickyHeadroom>
//       <header style={{ backgroundColor: 'lightblue', padding: '1rem', textAlign: 'center' }}>
//         <h1>My Sticky Header</h1>
//       </header>
//     </StickyHeadroom>
//   );
// };

// export default MyHeader;