const formatDate = (value: string): string => {
  const date = new Date(value);
  return Intl.DateTimeFormat('pt-br').format(date);
};

export default formatDate;
