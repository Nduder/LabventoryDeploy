import {
  Button,
  TextInput,
  Title,
  Flex,
  Checkbox,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import { SampleGenerator } from "./SampleGenerator.jsx";
import { NsoVariationTable } from "./NsoVariationTalble.jsx";

export const SampleGeneratorForm = () => {
  const [sampleVariations, setSampleVariation] = useState([]);
  const [prefix1, setPrefix1] = useState("");
  const [prefix2, setPrefix2] = useState("");
  const [suffix1, setSuffix1] = useState("");
  const [suffix2, setSuffix2] = useState("");
  const [numberedFlag, setNumberedFlag] = useState(true);
  const [variationSubtotal, setVariationSubtotal] = useState("");
  const [excelColumns, setExcelColumns] = useState(0);
  const [nsoRange, setNsoRange] = useState(["", ""]);
  const [nsoInclusionList, setnsoInclusionList] = useState("");
  const [identifierCounter, setIdentifierCounter] = useState(0);

  const addfixes = () => {
    setSampleVariation([
      ...sampleVariations,
      {
        prefix: [prefix1, prefix2],
        suffix: [suffix1, suffix2],
        total: variationSubtotal,
        numbered: numberedFlag,
        id: identifierCounter,
      },
    ]);
    setIdentifierCounter(identifierCounter + 1);
  };
  return (
    <Flex justify={"center"} gap={"5rem"}>
      <Flex direction={"column"} align={"center"}>
        <Title>Builder</Title>
        <Flex direction={"column"} gap="lg" justify={"center"}>
          <div className="sampleGenerator-component">
            <Flex gap={10} align={"center"} justify={"center"}>
              <TextInput
                onChange={(e) => setPrefix1(e.target.value)}
                value={prefix1}
                display={"inline-block"}
                label="Prefix"
              ></TextInput>

              <Title> "NSO Number" </Title>
              <TextInput
                onChange={(e) => setSuffix1(e.target.value)}
                value={suffix1}
                display={"inline-block"}
                label="Suffix"
              ></TextInput>
            </Flex>
            <Flex
              justify={"center"}
              m={20}
              direction={"column"}
              align={"center"}
            >
              {" "}
              <div>
                {" "}
                <TextInput
                  onChange={(e) => setVariationSubtotal(e.target.value)}
                  value={variationSubtotal}
                  display={"inline-block"}
                  label="Sample totals"
                ></TextInput>
                <Checkbox
                  label="Numbered"
                  checked={numberedFlag}
                  onChange={(event) =>
                    setNumberedFlag(event.currentTarget.checked)
                  }
                />
              </div>
              <Flex mt={20}>
                {" "}
                <Button onClick={addfixes} size="sm">
                  Add to list
                </Button>
              </Flex>
            </Flex>
          </div>
        </Flex>

        <div>Current array </div>
        <NsoVariationTable sampleVariations={sampleVariations} />
        <div>
          {sampleVariations.map((ele, idx) => {
            return (
              <div key={idx}>
                {" "}
                {/* {ele.prefix[0] +
                  ele.prefix[1] +
                  "NSO" +
                  ele.suffix[0] +
                  ele.suffix[1] +
                  `sample totals: ${ele.total}` +
                  (ele.numbered ? "Numbered" : "Not numbered")} */}
              </div>
            );
          })}
        </div>
      </Flex>
      <Flex gap={10} direction="column" align={"center"}>
        {" "}
        <div className="csvGenerator-component">
          <TextInput
            onChange={(e) => setExcelColumns(e.target.value)}
            value={excelColumns}
            display={"inline-block"}
            label="Columns - how many samples per row"
          />
          <TextInput
            onChange={(e) => {
              setNsoRange([
                parseInt(e.target.value) ? parseInt(e.target.value) : "",
                nsoRange[1],
              ]);
            }}
            value={nsoRange[0]}
            display={"inline-block"}
            label="NSO Start Range"
          />
          <TextInput
            onChange={(e) =>
              setNsoRange([
                nsoRange[0],
                parseInt(e.target.value) ? parseInt(e.target.value) : "",
              ])
            }
            value={nsoRange[1]}
            display={"inline-block"}
            label="NSO End Range"
          />
          <Textarea
            onChange={(e) => {
              console.log(
                nsoInclusionList
                  .replaceAll("\n", " ")
                  .split(" ")
                  .filter((ele) => ele !== "")
              );
              setnsoInclusionList(e.target.value);
            }}
            value={nsoInclusionList}
            label="NSO Exclusion Numbers - e.g. '3,4,5' to exclude nsos 3,4,5"
          ></Textarea>
        </div>
      </Flex>
      <SampleGenerator
        nsoInclusionList={nsoInclusionList}
        sampleVariations={sampleVariations}
        nsoRange={nsoRange}
        excelColumns={excelColumns}
      />{" "}
    </Flex>
  );
};
