// 'use client'
// import { useEffect, useState } from 'react';

// // Function to generate a list of dates within a specific range
// const generateDateRange = (startDate, endDate) => {
//     const dates = [];
//     const currentDate = new Date(startDate);
//     const end = new Date(endDate);

//     while (currentDate <= end) {
//         const dateStr = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
//         dates.push(dateStr);
//         currentDate.setDate(currentDate.getDate() + 1); // Increment the date by one day
//     }

//     return dates;
// };

// const DataDisplayComponent = () => {
//     const [jsonData, setJsonData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             const dateRange = generateDateRange('2024-11-01', '2025-12-31'); // Adjust range as needed
//             const allData = [];

//             for (let date of dateRange) {
//                 try {
//                     const response = await fetch(`/data/days/${date}-Home.json`);
//                     const data = await response.json();
//                     allData.push(data);
//                 } catch (error) {
//                     console.error('Error loading file for date', date, error);
//                 }
//             }

//             setJsonData(allData);
//             setLoading(false);
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <div>Loading data...</div>;
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Assuming you fetch data from an API or local JSON file
//                 const response = await fetch('/api/data');  // Or replace with your local JSON file
//                 const data = await response.json();

//                 // Extracting the 'thithiimages' value from the JSON response
//                 const thithiImagesValue = data.panchangamInfo.thithiimages;

//                 setThithiImages(thithiImagesValue);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Loaded JSON Data</h1>
//             {jsonData.map((fileData, index) => (
//                 <div key={index}>
//                     <h2>Data from {generateDateRange('2024-11-01', '2025-12-31')[index]}</h2>
//                     <pre>{JSON.stringify(fileData, null, 2)}</pre>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default DataDisplayComponent;

'use client'
import { useEffect, useState } from 'react';

// Function to generate a list of dates within a specific range
const generateDateRange = (startDate, endDate) => {
  const dates = [];
  const currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    const dateStr = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    dates.push(dateStr);
    currentDate.setDate(currentDate.getDate() + 1); // Increment the date by one day
  }

  return dates;
};

const DataDisplayComponent = () => {
  const [thithiImages, setThithiImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dateRange = generateDateRange('2024-11-01', '2025-12-31'); // Adjust the range as needed
      const images = [];

      for (let date of dateRange) {
        try {
          // Fetch the JSON file corresponding to the date
          const response = await fetch(`/data/days/${date}-Home.json`);
          const data = await response.json();

          // Extract thithiimages value and add it to the images array
          const thithiImagesValue = data.panchangamInfo.thithiimages;
          images.push({ date, thithiImagesValue });
        } catch (error) {
          console.error(`Error fetching file for ${date}:`, error);
        }
      }

      setThithiImages(images);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>Thithi Images for Date Range</h1>
      {thithiImages.length > 0 ? (
        thithiImages.map((item, index) => (
          <div key={index}>
            {/* <h2>{item.date}</h2> */}
            <p>{item.thithiImagesValue}</p>
          </div>
        ))
      ) : (
        <p>No data available for the selected range.</p>
      )}
    </div>
  );
};

export default DataDisplayComponent;
