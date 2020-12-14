export const isNullEmptyOrUndefined = (value: any) => {
  return (
    typeof value === 'undefined' ||
    value === null ||
    value === '' ||
    (typeof value === 'object' && Object.keys(value).length <= 0)
  );
};
