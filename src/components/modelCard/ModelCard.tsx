"use client";

import { VehicleModelI } from "./models.interfaces";
import Image from "next/image";
import { formatPrice } from "@/utils/numbers";

interface ModelListProps {
  vehicleData: VehicleModelI;
}

const ModelCard = ({ vehicleData }: ModelListProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md 
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer">
      <h1 className="text-2xl font-semibold text-center">{vehicleData.name}</h1>

      <div className="flex items-center gap-2 text-gray-600">
        <p>{vehicleData.year}</p>
        <span>|</span>
        <p>${formatPrice(vehicleData.price)}</p>
      </div>

      <Image
        src={vehicleData.photo}
        alt={vehicleData.name}
        width={300}
        height={300}
        className="mt-4 rounded-md"
      />
    </div>
  );
};

export default ModelCard;

