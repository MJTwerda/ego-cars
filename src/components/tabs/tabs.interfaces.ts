export enum TabValue {
  MODELS = 'models',
  MODELS_TAB = 'modelsTab',
};

export enum TabColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface TabI {
  value: TabValue;
  label: string | null;
};