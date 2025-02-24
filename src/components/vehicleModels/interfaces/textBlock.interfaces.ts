export interface ImageBlock {
  src: string;
  alt: string;
  position: 'right' | 'left';
};

export interface TextInfoBlock {
  model?: string;
  title: {
    text: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
  };
  description: string;
};