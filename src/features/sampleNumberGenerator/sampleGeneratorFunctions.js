// sampleVariations = [{prefix,suffix,total},{prefix,suffix,total}]
// nsoRange= [<nso numb start>, <nso numb end>]
// This function is used by 'make2DArray' function so unless you want to use it yourself you can ignore it entirely
const generateFullSampleList = (
  sampleVariations,
  nsoRange,
  nsoInclusionList
) => {
  let output = [];

  for (let nso = nsoRange[0]; nso <= nsoRange[1]; nso++) {
    if (nsoInclusionList.includes(nso)) continue;
    for (let i of sampleVariations) {
      for (
        let subvarIteration = 1;
        subvarIteration <= i.total;
        subvarIteration++
      ) {
        let currentSampleNumber = "";
        if (i.numbered == true) {
          currentSampleNumber =
            subvarIteration / 10 < 1 ? "0" + subvarIteration : subvarIteration;
        }
        output.push(
          i.prefix[0] +
            i.prefix[1] +
            nso +
            i.suffix[0] +
            i.suffix[1] +
            currentSampleNumber
        );
      }
    }
  }
  return output;
};

// sampleVariations = [{prefix,suffix,total},{prefix,suffix,total}]
// nsoRange= [<nso numb start>, <nso numb end>]
// columnMax= <number of columns you want in the excel document>

export const make2DArray = (
  sampleList,
  nsoRange,
  columnMax,
  nsoExclusionList
) => {
  const fullSampleList = generateFullSampleList(
    sampleList,
    nsoRange,
    nsoExclusionList
  );
  let currentColumn = 0;
  let outputArray = [];
  let currentRow = [];
  for (let i of fullSampleList) {
    if (currentColumn < columnMax) {
      currentRow.push(i);
      currentColumn++;
    } else {
      outputArray.push(currentRow);
      currentRow = [i];
      currentColumn = 1;
    }
  }
  if (currentColumn !== 1) outputArray.push(currentRow);
  console.log(outputArray);
  return outputArray;
};

export function arrayToCsv(data) {
  console.log(data);
  return data
    .map(
      (row) =>
        row
          .map(String) // convert every value to String
          .map((v) => v.replaceAll('"', '""')) // escape double quotes
          .map((v) => `"${v}"`) // quote it
          .join(",") // comma-separated
    )
    .join("\r\n"); // rows starting on new lines
}
