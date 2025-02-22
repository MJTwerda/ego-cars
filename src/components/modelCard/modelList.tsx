'use-client'

import { VehicleModelI } from "./models.interfaces";

interface ModelListProps {
  vehicleData: VehicleModelI;
}

const VehicleCard = ({ vehicleData }: ModelListProps) => {

  return (
    <div>
      <p>{vehicleData.name}</p>
    </div>
  )
};

export default VehicleCard;