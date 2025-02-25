"use client";

import { VehicleModelI } from "../interfaces/models.interfaces";
import Image from "next/image";
import Link from "next/link";

interface ModelListProps {
  vehicleData: VehicleModelI;
}

const ModelCard = ({ vehicleData }: ModelListProps) => {
  return (
    <Link href={`/model-sheet?id=${vehicleData.id}`}
      className="group hover:scale-105 transition-transform"
    >
      <div className="flex flex-col items-center p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold group-hover:text-[--color-active]">
            {vehicleData.name}
          </h1>

          <div className="flex space-x-2 text-gray-600">
            <p>{vehicleData.year} |</p>
            <p>{vehicleData.price.toLocaleString("es-AR")}</p>
          </div>
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
