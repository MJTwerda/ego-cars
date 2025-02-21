'use-client'

import { VehicleModelI } from "./models.interfaces";

interface ModelListProps {
  modelsData: VehicleModelI[];
}

const ModelList = ({ modelsData }: ModelListProps) => {

  return (
    <div>
      {modelsData.map((model: VehicleModelI) => (
        <div key={model.id}>
          <p>{model.name}</p>
        </div>
      ))}
    </div>
  )
};

export default ModelList;