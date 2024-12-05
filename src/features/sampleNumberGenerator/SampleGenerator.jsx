import { Box, Button } from "@mantine/core";
import { arrayToCsv } from "./sampleGeneratorFunctions";
import { make2DArray } from "./sampleGeneratorFunctions";

function downloadBlob(content, filename, contentType) {
  // Create a blob
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);

  // Create a link to download it
  var pom = document.createElement("a");
  pom.href = url;
  pom.setAttribute("download", filename);
  pom.click();
}

export const SampleGenerator = ({
  nsoInclusionList,
  sampleVariations,
  nsoRange,
  excelColumns,
}) => {
  return (
    <Box>
      <Button
        disabled={false}
        onClick={() => {
          console.log(nsoRange[0], nsoRange[1]);
          if (nsoRange[0] > nsoRange[1]) {
            alert("NSO start range cannot be lower than NSO end range");
            return;
          } else if (
            !Number.isInteger(nsoRange[0]) ||
            !Number.isInteger(nsoRange[1])
          ) {
            alert("NSO range invalid");
            return;
          }
          let csv = arrayToCsv(
            make2DArray(
              sampleVariations,
              nsoRange,
              excelColumns,
              nsoInclusionList
            )
          );
          downloadBlob(csv, "export.csv", "text/csv;charset=utf-8;");
        }}
      >
        Create csv
      </Button>
    </Box>
  );
};
