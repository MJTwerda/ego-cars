"use client";

import { VehicleModelI } from "../interfaces/models.interfaces";
import Image from "next/image";
import Link from "next/link";

interface ModelListProps {
  vehicleData: VehicleModelI;
}

const ModelCard = ({ vehicleData }: ModelListProps) => {
  return (
    <div className="group hover:scale-105 transition-transform duration-300">
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
          className="my-2 rounded object-cover"
        />

        <Link
          href={`/model-sheet?id=${vehicleData.id}`}
          className="bg-black text-white px-4 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Ver Modelo
        </Link>
      </div>

    </div>
  );
};

export default ModelCard;
