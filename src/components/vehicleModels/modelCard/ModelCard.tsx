"use client";

import { VehicleModelI } from "../interfaces/models.interfaces";
import Image from "next/image";
import Link from "next/link";

export interface ModelListProps {
  vehicleData: VehicleModelI;
}

const ModelCard = ({ vehicleData }: ModelListProps) => {
  return (
    <Link href={`/model-sheet?id=${vehicleData.id}`} className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center border p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold">{vehicleData.name}</h1>

        <div className="flex space-x-2 text-gray-600">
          <p>{vehicleData.year} |</p>
          <p>$ {vehicleData.price.toLocaleString("es-AR")}</p>
        </div>

        <Image
          src={vehicleData.photo}
          alt={vehicleData.name}
          width={300}
          height={200}
          className="mt-2 rounded"
        />
      </div>
    </Link>
  );
};

export default ModelCard;
