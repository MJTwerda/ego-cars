export interface VehicleModelI {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
};

export interface ModelFeaturesI {
  description: string;
  image: string;
  name: string;
};

export interface ModelHighlightsI {
  content: string;
  image: string;
  title: string;
};

export interface VehicleModeldetailsI extends VehicleModelI {
  description: string;
  model_features: ModelFeaturesI[];
  model_highlights: ModelHighlightsI[];
  title: string;
};