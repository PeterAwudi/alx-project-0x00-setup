import Image from "next/image";
import HOUSE_IMAGE from "@/public/assets/house.png";
import STAR_IMAGE from "@/public/assets/star.png";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    // ... existing code
    <div className="p-2 flex gap-2 mt-2">
      <Pill title="Top Villa" />
      <Pill title="Self CheckIn" />
      <Pill title="Free Reschedule" />
    </div>
    // ... existing code
  );
};

export default Card;

