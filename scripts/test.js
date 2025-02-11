function getTime(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const min = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${min} min ${remainingSecond} sec ago`;
}

console.log(getTime(8000));
