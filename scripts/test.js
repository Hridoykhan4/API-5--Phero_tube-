function getTime(time) {
  const year = parseInt(time / (365 * 86400));
  let remainingSecond = time % (365 * 86400);

  const day = parseInt(remainingSecond / 86400);
  remainingSecond = remainingSecond % 86400;

  const hour = parseInt(remainingSecond / 3600);
  remainingSecond = remainingSecond % 3600;

  const min = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;

  return `${year === 0 ? "" : year + " year"} ${
    day === 0 ? "" : day + " day"
  } ${hour} hour ${min} min ${remainingSecond} sec ago`;
}

