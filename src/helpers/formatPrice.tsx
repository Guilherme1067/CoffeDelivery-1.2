export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('br-PT', {
    style: 'currency',
    currency: "BRL"
  }).format(price)
}