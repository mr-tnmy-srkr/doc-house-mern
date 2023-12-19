import { useState } from "react";
import { useEffect } from "react";

import OpeningHrCard from "./OpeningHrCard";



const OpeningHr = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./OpeningHr.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {data?.map((item) => (
       <OpeningHrCard key={item.id} item={item}/>
      ))}
    </div>
  );
};
export default OpeningHr;
