export const formatPhone = (value: string) => {
  if (!value) {
    return '';
  }
  const cleaned = value.replace(/\D/g, '').slice(0, 11);
  if (cleaned.length <= 2) {
    return `(${cleaned}`;
  }
  if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  }
  if (cleaned.length <= 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7,
    )}`;
  }
  return value;
};
