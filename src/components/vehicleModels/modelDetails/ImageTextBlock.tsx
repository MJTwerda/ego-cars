import { stripHtmlTags } from '@/utils/stringsManagement';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { ImageBlock, TextInfoBlock } from '../interfaces/textBlock.interfaces';

interface ImageTextBlockProps {
  image: ImageBlock;
  textInfo: TextInfoBlock;
};

const ImageTextBlock = ({ image, textInfo }: ImageTextBlockProps) => {

  return (
    <div className={`flex flex-col lg:flex-row ${image.position === 'right' ? 'lg:flex-row-reverse' : ''} align-center mx-4 mt-11 sm:mx-32`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={300}
        className={`rounded ${image.width ? `lg:w-[${image.width}%]` : 'lg:w-1/2'} ${image.position === 'right' ? 'lg:ml-12' : 'lg:mr-12'}`}
      />

      <div className="flex flex-col self-center lg:w-[40%]">
        {textInfo.model &&<Typography variant="h5">{textInfo.model}</Typography>}
        <Typography variant={textInfo.title.variant} className="mb-4">{textInfo.title.text}</Typography>
        <Typography variant="body2">
          {`${stripHtmlTags(textInfo.description)} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}
        </Typography>
      </div>
    </div>
  );
};

export default ImageTextBlock;