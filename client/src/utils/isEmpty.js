export const isEmpty = (valueArray = []) => {
  let isEmpty = true;

  for (let item of valueArray) {
    if (item && item.trim().length > 0) {
      isEmpty = false;
    }
  }

  return isEmpty;
};
