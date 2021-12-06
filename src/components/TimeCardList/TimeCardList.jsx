import { data } from "../../data";

import React from "react";
import { TimeCard } from "../TimeCard/TimeCard";

export const TimeCardList = () => {
  return (
    <div>
      {data.map((info, i) => {
        return <TimeCard key={i} info={info} period="Day"/>;
      })}
    </div>
  );
};
