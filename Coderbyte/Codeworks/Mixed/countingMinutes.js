function CountingMinutesI(str) { 
  let matches = str.match(/([0-9:]+)[pa]m/g);
  let timesList = matches.map(time => time.match(/\d+/g));
  let parsedTimesList = timesList.map(time => time.map(Number));

  for (let j = 0; j < matches.length; j++) {
    if (matches[j].match(/p/)) parsedTimesList[j][0] += 12;
  }

  if (parseInt(parsedTimesList[1].join('')) < parseInt(parsedTimesList[0].join(''))) parsedTimesList[1][0] += 24;

  const hoursToMins = arr => arr[0] * 60 + arr[1];

  let retVal = parsedTimesList.map(hoursToMins).reduceRight((x, y) => x - y)
  return retVal;
}

console.log(CountingMinutesI("12:30pm-12:00am"));
console.log(CountingMinutesI("1:23am-1:08am"));