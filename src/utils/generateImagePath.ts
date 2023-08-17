import { resetFormatting } from './resetFormatting';

export const generateImageUrl = (
  name: string,
  imageNumber: number,
  resourceType: string,
) => {
  const formattedName = resetFormatting(name);
  let url = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${resourceType}/`;

  if (resourceType === 'products') {
    url += `${formattedName}/${formattedName}_${imageNumber}`;
  } else {
    url += `${formattedName}`;
  }

  return `${url}.png`;
};
