const trimString = (string: string, length?: number) => {
  const maxLength = length || 30;

  return string.length > maxLength
    ? `${string.substring(0, maxLength)}...`
    : string;
};

export default trimString;
