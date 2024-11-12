import React from 'react'

const MonthList = ({handleMonthChange}) => {

    
    const monthData = {
        "1": "ஜனவரி",
        "2": "பிப்ரவரி",
        "3": "மார்ச்",
        "4": "ஏப்ரல்",
        "5": "மே",
        "6": "ஜூன்",
        "7": "ஜூலை",
        "8": "ஆகஸ்ட்",
        "9": "செப்டம்பர்",
        "10": "அக்டோபர்",
        "11": "நவம்பர்",
        "12": "டிசம்பர்",
    };

    return (
        <div className="month-list">
            <div className="month-popup" >
                {Object.keys(monthData).map((month, idx) => (
                    <div className="months" key={month}>
                        <a href=''
                            data-id={idx}
                            className="month_common month_1"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleMonthChange(idx + 2); // Update selected month on click
                            }}>
                            {monthData[month]}
                        </a>
                    </div>
                ))}

                {/* <div>
                {calendarData.cal.map((month, index) => (
                    <button
                        key={index}
                        onClick={() => handleMonthChange(index)}
                        style={{
                            margin: '5px',
                            padding: '10px',
                            backgroundColor: currentMonthIndex === index ? '#ddd' : '#fff'
                        }}
                    >
                        {month.month_name}
                    </button>
                ))}
            </div> */}

            </div>
        </div>
    )
}

export default MonthList