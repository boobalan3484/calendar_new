// 'use client'

// import React from 'react'
// // import { useEffect, useState } from 'react';
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

// const Test = () => {
//     const calendar = calendarData.cal[0]; // Access the first month for demonstration

//     return (
//         <div>
//             <h1>{calendar.month_name_tamil} ({calendar.month_name})</h1>
//             <div>
//                 {calendar.days.map((day, index) => (
//                     <div key={index} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
//                         <p><strong>Date:</strong> {day.date} ({day.tamilday})</p>
//                         <p><strong>Tamil Date:</strong> {day.tamil_date} {day.tamilmonth}</p>
//                         <p><strong>Day:</strong> {day.day}</p>
//                         {day.special_day && day.special_day.length > 0 && (
//                             <div>
//                                 <strong>Special Days:</strong>
//                                 <ul>
//                                     {day.special_day.map((special, idx) => (
//                                         <li key={idx}>{special.name} {special.icon && `(${special.icon})`}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Test

// 'use client'
// import React from 'react'
// import { useState } from 'react';
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

// const Test = () => {


//     const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month

//     const handleMonthChange = (index) => {
//         setCurrentMonthIndex(index);
//     };

//     const calendar = calendarData.cal[currentMonthIndex]; // Get the current month's data

//     return (
//         <div>
//             <select onChange={(e) => handleMonthChange(e.target.value)} value={currentMonthIndex}>
//                 {calendarData.cal.map((month, index) => (
//                     <option key={index} value={index}>{month.month_name}</option>
//                 ))}
//             </select>

//             <h1>{calendar.month_name_tamil} ({calendar.month_name})</h1>

//             {/* Dropdown or buttons for changing month */}
//             {/* <div>
//                 {calendarData.cal.map((month, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleMonthChange(index)}
//                         style={{
//                             margin: '5px',
//                             padding: '10px',
//                             backgroundColor: currentMonthIndex === index ? '#ddd' : '#fff'
//                         }}
//                     >
//                         {month.month_name_tamil}
//                     </button>
//                 ))}
//             </div> */}

//             <div>
//                 {calendar.days.map((day, index) => (
//                     <div key={index} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
//                         <p><strong>Date:</strong> {day.date} ({day.tamilday})</p>
//                         <p><strong>Tamil Date:</strong> {day.tamil_date} {day.tamilmonth}</p>
//                         <p><strong>Day:</strong> {day.day}</p>
//                         {day.special_day && day.special_day.length > 0 && (
//                             <div>
//                                 <strong>Special Days:</strong>
//                                 <ul>
//                                     {day.special_day.map((special, idx) => (
//                                         <li key={idx}>{special.name} {special.icon && `(${special.icon})`}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default Test

// 'use client'
// import { useState } from 'react';
// // import calendarData from '../data/calendarData.json'; // Adjust the path as necessary
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

// export default function Test() {
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month

//   const handleMonthChange = (index) => {
//     setCurrentMonthIndex(index);
//   };

//   const calendar = calendarData.cal[currentMonthIndex]; // Get the current month's data
//   const daysInMonth = calendar.days;

//   // Helper to format days into weeks
//   const daysPerWeek = 7;
//   const weeks = [];
//   let week = [];

//   // Create an array of weeks (each week being an array of days)
//   daysInMonth.forEach((day, index) => {
//     week.push(day);
//     if ((index + 1) % daysPerWeek === 0 || index === daysInMonth.length - 1) {
//       weeks.push(week);
//       week = [];
//     }
//   });

//   return (
//     <div>
//       <h1>{calendar.month_name_tamil} ({calendar.month_name})</h1>

//       {/* Dropdown or buttons for changing month */}
//       <div>
//         {calendarData.cal.map((month, index) => (
//           <button
//             key={index}
//             onClick={() => handleMonthChange(index)}
//             style={{
//               margin: '5px',
//               padding: '10px',
//               backgroundColor: currentMonthIndex === index ? '#ddd' : '#fff'
//             }}
//           >
//             {month.month_name_tamil}
//           </button>
//         ))}
//       </div>

//       {/* Render calendar grid */}
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(${daysPerWeek}, 1fr)`, gap: '5px', marginTop: '20px' }}>
//         {/* Render day names */}
//         {calendarData.calendarDays.map((dayName, index) => (
//           <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }}>{dayName}</div>
//         ))}

//         {/* Render weeks */}
//         {weeks.map((week, weekIndex) => (
//           <div key={weekIndex} style={{ display: 'contents' }}>
//             {week.map((day, dayIndex) => (
//               <div key={dayIndex} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//                 <p><strong>{day.date}</strong></p>
//                 <p>{day.tamilday}</p>
//                 {day.special_day && day.special_day.length > 0 && (
//                   <div style={{ color: 'red' }}>
//                     {day.special_day.map((special, idx) => (
//                       <div key={idx}>{special.name}</div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             {/* Add empty divs if the week has fewer than 7 days */}
//             {week.length < daysPerWeek && Array(daysPerWeek - week.length).fill().map((_, idx) => (
//               <div key={`empty-${idx}`} style={{ border: '1px solid #ddd', padding: '10px' }}></div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client'
// import { useState } from 'react';
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

// export default function Test() {
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month

//   const handleMonthChange = (index) => {
//     setCurrentMonthIndex(index);
//   };

//   const calendar = calendarData.cal[currentMonthIndex]; // Get the current month's data
//   const daysInMonth = calendar.days;

//   // Determine the starting day of the month (e.g., "Fri" is the 5th index in a week starting from Sunday)
//   const weekDays = calendarData.calendarDays;
//   const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);

//   // Fill the first week with empty slots up to the starting day
//   const weeks = [];
//   let week = new Array(startDayIndex).fill(null); // Fill with `null` up to `startDayIndex`

//   // Create an array of weeks (each week being an array of days)
//   daysInMonth.forEach((day, index) => {
//     week.push(day);
//     if (week.length === 7 || index === daysInMonth.length - 1) {
//       weeks.push(week);
//       week = [];
//     }
//   });

//   // Render the component
//   return (
//     <div>
//       <h1>{calendar.month_name_tamil} ({calendar.month_name})</h1>

//       {/* Dropdown or buttons for changing the month */}
//       {/* <div>
//         {calendarData.cal.map((month, index) => (
//           <button
//             key={index}
//             onClick={() => handleMonthChange(index)}
//             style={{
//               margin: '5px',
//               padding: '10px',
//               backgroundColor: currentMonthIndex === index ? '#ddd' : '#fff'
//             }}
//           >
//             {month.month_name_tamil}
//           </button>
//         ))}
//       </div> */}

//       {/* Render calendar grid */}
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px', marginTop: '20px' }}>
//         {/* Render day names */}
//         {weekDays.map((dayName, index) => (
//           <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }}>{dayName}</div>
//         ))}

//         {/* Render weeks */}
//         {weeks.map((week, weekIndex) => (
//           <div key={weekIndex} style={{ display: 'contents' }}>
//             {week.map((day, dayIndex) => (
//               <div
//                 key={dayIndex}
//                 style={{
//                   border: '1px solid #ddd',
//                   padding: '10px',
//                   textAlign: 'center',
//                   backgroundColor: day ? '#fff' : '#f0f0f0' // Highlight empty slots
//                 }}
//               >
//                 {day ? (
//                   <>
//                     <p><strong>{day.date}</strong></p>
//                     <p>{day.tamilmonth}</p>
//                     {/* <p>{day.tamil_date}</p> */}
//                     {/* {day.special_day && day.special_day.length > 0 && (
//                       <div style={{ color: 'red' }}>
//                         {day.special_day.map((special, idx) => (
//                           <p key={idx}>{special.name}</p>
//                         ))}
//                       </div>
//                     )} */}
//                   </>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client'
// import { useState } from 'react';
// // import calendarData from '../data/calendarData.json'; // Adjust the path as necessary
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary


// export default function Test() {
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month
//   const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Default to the first week

//   const calendar = calendarData.cal[currentMonthIndex]; // Get the current month's data
//   const daysInMonth = calendar.days;

//   // Determine the starting day of the month (e.g., "Fri" is the 5th index in a week starting from Sunday)
//   const weekDays = calendarData.calendarDays;
//   const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);

//   // Create weeks from the days array
//   const weeks = [];
//   let week = new Array(startDayIndex).fill(null); // Fill with `null` up to `startDayIndex`
//   daysInMonth.forEach((day, index) => {
//     week.push(day);
//     if (week.length === 7 || index === daysInMonth.length - 1) {
//       weeks.push(week);
//       week = [];
//     }
//   });

//   const handlePrevWeek = () => {
//     if (currentWeekIndex > 0) {
//       setCurrentWeekIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const handleNextWeek = () => {
//     if (currentWeekIndex < weeks.length - 1) {
//       setCurrentWeekIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   // Image mapping for special days
//   const specialDayImages = {
//     "அமாவாசை": "/images/amavasai.png",
//     "பௌர்ணமி": "/images/fullmoon.png",
//     "சதுர்த்தி": "/images/chaturthi.png",
//     "சஸ்டி": "/images/sashti.png",
//     "கிருத்திகை": "/images/karthigai.png"
//   };

//   return (
//     <div>
//       <h1>{calendar.month_name_tamil} ({calendar.month_name}) - Week {currentWeekIndex + 1}</h1>

//       {/* Prev and Next buttons for weeks */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <button onClick={handlePrevWeek} disabled={currentWeekIndex === 0}>&lt; Prev Week</button>
//         <button onClick={handleNextWeek} disabled={currentWeekIndex === weeks.length - 1}>Next Week &gt;</button>
//       </div>

//       {/* Render weekly calendar grid */}
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px' }}>
//         {/* Render day names */}
//         {weekDays.map((dayName, index) => (
//           <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }}>{dayName}</div>
//         ))}

//         {/* Render current week */}
//         {weeks[currentWeekIndex].map((day, dayIndex) => (
//           <div
//             key={dayIndex}
//             style={{
//               border: '1px solid #ddd',
//               padding: '10px',
//               textAlign: 'center',
//               backgroundColor: day ? '#fff' : '#f0f0f0' // Highlight empty slots
//             }}
//           >
//             {day ? (
//               <>
//                 <p><strong>{day.date}</strong></p>
//                 <p>{day.tamilday}</p>
//                 {day.special_day && day.special_day.length > 0 && (
//                   <div>
//                     {day.special_day.map((special, idx) => (
//                       <img
//                         key={idx}
//                         src={specialDayImages[special.name]}
//                         alt={special.name}
//                         style={{ width: '20px', height: '20px' }}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </>
//             ) : (
//               <p>&nbsp;</p> // Empty cell placeholder
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// 'use client'
// import { useState } from 'react';
// // import calendarData from '../data/calendarData.json'; // Adjust the path as necessary
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

// export default function Test() {
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Start with the first month
//   const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Start with the first week

//   // Helper function to create weeks from days in the month
//   const createWeeks = (daysInMonth) => {
//     const weekDays = calendarData.calendarDays;
//     const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
//     const weeks = [];
//     let week = new Array(startDayIndex).fill(null); // Fill with `null` for initial empty slots

//     daysInMonth.forEach((day, index) => {
//       week.push(day);
//       if (week.length === 7 || index === daysInMonth.length - 1) {
//         weeks.push(week);
//         week = [];
//       }
//     });
//     return weeks;
//   };

//   // Get the current month's data and create weeks from it
//   const calendar = calendarData.cal[currentMonthIndex];
//   const weeks = createWeeks(calendar.days);

//   // Function to handle moving to the previous week
//   const handlePrevWeek = () => {
//     if (currentWeekIndex > 0) {
//       setCurrentWeekIndex(currentWeekIndex - 1);
//     } else if (currentMonthIndex > 0) {
//       // Move to the last week of the previous month
//       setCurrentMonthIndex(currentMonthIndex - 1);
//       setCurrentWeekIndex(createWeeks(calendarData.cal[currentMonthIndex - 1].days).length - 1);
//     }
//   };

//   // Function to handle moving to the next week
//   const handleNextWeek = () => {
//     if (currentWeekIndex < weeks.length - 1) {
//       setCurrentWeekIndex(currentWeekIndex + 1);
//     } else if (currentMonthIndex < calendarData.cal.length - 1) {
//       // Move to the first week of the next month
//       setCurrentMonthIndex(currentMonthIndex + 1);
//       setCurrentWeekIndex(0);
//     }
//   };

//   // Determine if buttons should be disabled
//   const isPrevDisabled = currentMonthIndex === 0 && currentWeekIndex === 0;
//   const isNextDisabled = currentMonthIndex === calendarData.cal.length - 1 &&
//                          currentWeekIndex === weeks.length - 1;

//   // Image mapping for special days
//   const specialDayImages = {
//     "அமாவாசை": "/images/amavasai.png",
//     "பௌர்ணமி": "/images/fullmoon.png",
//     "சதுர்த்தி": "/images/chaturthi.png",
//     "சஸ்டி": "/images/sashti.png",
//     "கிருத்திகை": "/images/karthigai.png"
//   };

//   return (
//     <div>
//       <h1>{calendar.month_name_tamil} ({calendar.month_name}) - Week {currentWeekIndex + 1}</h1>

//       {/* Prev and Next buttons for weeks */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <button onClick={handlePrevWeek} disabled={isPrevDisabled}>&lt; Prev Week</button>
//         <button onClick={handleNextWeek} disabled={isNextDisabled}>Next Week &gt;</button>
//       </div>

//       {/* Render weekly calendar grid */}
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px', marginTop: '20px' }}>
//         {/* Render day names */}
//         {calendarData.calendarDays.map((dayName, index) => (
//           <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }}>{dayName}</div>
//         ))}

//         {/* Render days in the current week */}
//         {weeks[currentWeekIndex].map((day, dayIndex) => (
//           <div key={dayIndex} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
//             {day ? (
//               <>
//                 <p><strong>{day.date}</strong></p>
//                 <p>{day.tamilday}</p>
//                 {day.special_day && day.special_day.length > 0 && (
//                   <div>
//                     {day.special_day.map((special, specialIndex) => (
//                       <img
//                         key={specialIndex}
//                         src={specialDayImages[special.name]}
//                         alt={special.name}
//                         style={{ width: '20px', height: '20px' }}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'
import { useState, useEffect } from 'react';

export default function Test() {
  const [currentDate, setCurrentDate] = useState(new Date('2024-11-01'));
  const [dayData, setDayData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDayData(date) {
      setLoading(true);
      try {
        const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const response = await fetch(`/data/days/${formattedDate}-Home.json`);
        if (!response.ok) {
          throw new Error('File not found');
        }
        const data = await response.json();
        setDayData(data);
      } catch (error) {
        console.error('Error fetching day data:', error);
        setDayData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchDayData(currentDate);
  }, [currentDate]);

  const handleNextDay = () => {
    setCurrentDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(prevDate.getDate() + 1);
      return nextDate;
    });
  };

  const handlePreviousDay = () => {
    setCurrentDate((prevDate) => {
      const prevDateCopy = new Date(prevDate);
      prevDateCopy.setDate(prevDate.getDate() - 1);
      return prevDateCopy;
    });
  };

  return (
    <div>
      <div>
        <button onClick={handlePreviousDay}>Previous</button>
        <span>{currentDate.toDateString()}</span>
        <button onClick={handleNextDay}>Next</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : dayData ? (
        <div>
          <h2>Day Data for {currentDate.toDateString()}</h2>
          <div>
            <h3>Daily Information</h3>
            <p><strong>Karanan:</strong> {dayData.dailyInfo.Karanan}</p>
            <p><strong>Sunrise:</strong> {dayData.dailyInfo.Sunrise}</p>
            <p><strong>Star Details:</strong> {dayData.dailyInfo.StarDetails}</p>
            <p><strong>Karanam Details:</strong> {dayData.dailyInfo.KaranamDetails}</p>
            <p><strong>Sulam:</strong> {dayData.dailyInfo.Sulam}</p>
            <p><strong>Parikaram:</strong> {dayData.dailyInfo.Parikaram}</p>
            <p><strong>Namyogam:</strong> {dayData.dailyInfo.Namyogam}</p>
            <p><strong>Amirthathiyogam:</strong> {dayData.dailyInfo.Amirthathiyogam}</p>
            <p><strong>Nethiram:</strong> {dayData.dailyInfo.Nethiram}</p>
            <p><strong>Jeevan:</strong> {dayData.dailyInfo.Jeevan}</p>
            <p><strong>Main Days:</strong> {dayData.dailyInfo.MainDays}</p>
            <p><strong>Sub Days:</strong> {dayData.dailyInfo.SubDays}</p>
            <p><strong>Day Details:</strong> {dayData.dailyInfo.DayDetails}</p>
            <p><strong>Pirai:</strong> {dayData.dailyInfo.Pirai}</p>
          </div>
          <div>
            <h3>Date Details</h3>
            <p><strong>Tamil Date:</strong> {dayData.homedates.tamilDate}</p>
            <p><strong>Tamil Month:</strong> {dayData.homedates.tamilMonth}</p>
            <p><strong>Tamil Year:</strong> {dayData.homedates.tamilYear}</p>
            <p><strong>English Month:</strong> {dayData.homedates.engMonth}</p>
            <p><strong>English Week Day:</strong> {dayData.homedates.engweekDay}</p>
            <p><strong>Tamil Week Day:</strong> {dayData.homedates.tamilWeekDay}</p>
            <p><strong>Human Format:</strong> {dayData.homedates.humanFormat}</p>
          </div>
        </div>
      ) : (
        <p>No data available for this day.</p>
      )}
    </div>
  );
}
