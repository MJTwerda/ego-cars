import { VehicleModeldetailsI } from "../interfaces/models.interfaces";
import { stripHtmlTags } from '../../../utils/stringsManagement';
import ImageTextBlock from './ImageTextBlock';
import ImageCarousel from './ImageCarousel';

interface ModelDetailsProps {
  vehicleData: VehicleModeldetailsI;
}

const ModelDetails = ({ vehicleData }: ModelDetailsProps) => {
  return (
    <div className="flex flex-col">
      <ImageTextBlock
        image={{ src: vehicleData.photo, alt: vehicleData.name, position: 'left', width: '60' }}
        textInfo={{
          model: vehicleData.name,
          title: { text: vehicleData.title, variant: 'h3' },
          description: vehicleData.description
        }}
      />

      {/* Se concatenan 3 veces para simular un carrusel con mayor visibilidad */}
      <ImageCarousel modelFeatures={vehicleData.model_features.concat(vehicleData.model_features).concat(vehicleData.model_features)} />

      <div className="flex flex-col mt-4">
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