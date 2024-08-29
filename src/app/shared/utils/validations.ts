export const isObjectEmpty = (object: any): boolean => {
  return JSON.stringify(object) === '{}'
}