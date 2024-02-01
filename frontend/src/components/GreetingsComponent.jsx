import React, { useEffect, useState } from "react";

const GreetingsComponent = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 16) {
      setGreeting("Good Afternoon");
    } else if (currentHour >= 16 && currentHour < 19) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Welcome !");
    }
  }, []);

  return (
    <div>
      <h1 className=" text-lg font-serif font-medium  text-blue-700">
        {greeting}!
      </h1>
    </div>
  );
};

export default GreetingsComponent;
