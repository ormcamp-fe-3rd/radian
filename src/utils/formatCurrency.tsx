//금액 숫자 형식
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value);
};
