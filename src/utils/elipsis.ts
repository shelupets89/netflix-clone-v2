const elipsis = (str: string | undefined, num: number): string => {
  if (str) {
    return str?.length > num ? str.substring(0, num - 1) + '...' : str
  }
  return '';
}

export default elipsis
