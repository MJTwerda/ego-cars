import { VehicleModeldetailsI } from "../interfaces/models.interfaces";
import { stripHtmlTags } from '../../../utils/stringsManagement';
import ImageTextBlock from './ImageTextBlock';

interface ModelDetailsProps {
  vehicleData: VehicleModeldetailsI;
}

const ModelDetails = ({ vehicleData }: ModelDetailsProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-12">
        <ImageTextBlock
          image={{ src: vehicleData.photo, alt: vehicleData.name, position: 'left' }}
          textInfo={{
            model: vehicleData.name,
            title: { text: vehicleData.title, variant: 'h4' },
            description: vehicleData.description
          }}
        />
      </div>

      <p>Acá va el Carrousel</p>

      <div className="flex flex-col mt-12">
        {vehicleData.model_highlights.map((highlight, index) => {
          const indexIsPar = index % 2 === 0
          return (
            <ImageTextBlock
              key={highlight.title}
              image={{ src: highlight.image, alt: highlight.title, position: indexIsPar ? 'right' : 'left' }}
              textInfo={{
                title: { text: highlight.title, variant: 'h6' },
                description: stripHtmlTags(highlight.content)
              }}
            />

          )
        })}
      </div>

    </div>
  );
};

export default ModelDetails;