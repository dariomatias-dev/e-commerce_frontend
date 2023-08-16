export const formatCep = (value: string) => {
  if (value.length > 9) return value.slice(0, 9);

  return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
};
