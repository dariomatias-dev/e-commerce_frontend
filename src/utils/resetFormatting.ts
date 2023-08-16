const resetFormatting = (content: string) => {
  return content
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
    .toLocaleLowerCase();
};

export default resetFormatting;
