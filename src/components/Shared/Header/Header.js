"use client"

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
    
        const [currentDateTime, setCurrentDateTime] = useState(new Date());
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentDateTime(new Date());
          }, 1000); // Update every second
      
          return () => clearInterval(interval);
        }, []);
      
        const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
        const weekName = weekNames[currentDateTime.getDay()];
        const monthName = monthNames[currentDateTime.getMonth()];
        const date = currentDateTime.getDate();
        const year = currentDateTime.getFullYear();
    return (
        <div>
            <div className="my-6 space-y-5 text-center">
            <h1 className="font-UnifrakturCook font-medium text-7xl">The Dragon News</h1>
            <h1 className="font-inter text-lg font-normal">Journalism Without Fear or Favour</h1>
            <h1 className="font-inter text-xl font-medium">{weekName}<span className="text-[#797878]">, {monthName} {date}, {year}</span></h1>
            </div>
            <Navbar/>
        </div>
    );
};

export default Header;