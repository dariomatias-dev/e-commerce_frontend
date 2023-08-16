import resetFormatting from './resetFormatting';

export const generateImageUrl = (name: string, resourceType: string) => {
  const formattedName = resetFormatting(name);
  let url = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${resourceType}/`;

  if (resourceType === 'products') {
    url += `${formattedName}/${formattedName}_1`;
  } else {
    url += `${formattedName}`;
  }

  return `${url}.png`;
};
