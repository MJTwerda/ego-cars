// export const formatPrice = (price: number) => {
//   return price.toLocaleString("es-ES");
// };

export const formatPrice = (price: number): string => {
  const [integer, decimal] = price.toFixed(2).split('.');

  const integerFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return decimal === '00' ? integerFormatted : `${integerFormatted},${decimal}`;
};
