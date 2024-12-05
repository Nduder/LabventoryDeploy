import { useState } from "react";
import "./App.css";
import { useDisclosure } from "@mantine/hooks";
import {
  Flex,
  AppShell,
  Burger,
  Button,
  Paper,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
  Input,
  TextInput,
} from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";
import { LogEntry } from "./components/LogEntry/LogEntry";
import { Inventory } from "./components/Inventory/Inventory";
import { InventoryUnit } from "./components/Inventory/parts/InventoryUnit";
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { GetRecordButton } from "./components/GetRecords";
import { ChangeInventoryButton } from "./components/Inventory/ChangeInventory";
import { SampleGeneratorContainer } from "./features/sampleNumberGenerator/SampleGeneratorContainer";

function App() {
  const [log, setLog] = useState(["test"]);
  const [redCapRecords, setRedcapRecords] = useState([]);
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();
  const currentColorScheme = useComputedColorScheme("light");
  const [record_id, setRecord_id] = useState(1);
  const [field, setFieldValue] = useState(1);

  return (
    <AppShell>
      <Flex justify="end" align="center" direction={"row"}>
        {" "}
        {/* <Burger open={opened} onClick={toggle}></Burger> */}
        <Button onClick={toggleColorScheme} m={"1rem"}>
          {currentColorScheme == "dark" ? <FaMoon /> : <FaSun />}
          Night mode toggle
        </Button>
      </Flex>
      {/* <AppShellNavbar p="md" style={{ gap: "10px" }}>
        <GetRecordButton setRedcapRecords={setRedcapRecords} />
        <div>
          {redCapRecords.map((ele) => {
            return (
              <div>
                {ele.record_id} : {ele.sampletotal}
              </div>
            );
          })}
        </div>
      </AppShellNavbar> */}
      {/* <AppShellMain> */}
      <SampleGeneratorContainer />
      {/* </AppShellMain> */}
    </AppShell>
  );
}

export default App;

{
  /* <Flex
justify="space-between"
align="center"
style={{ padding: "10px 20px" }}
direction={"column"}
>
<LogEntry log={log} setLog={setLog}></LogEntry>
<Inventory></Inventory>

<InventoryUnit />
<ChangeInventoryButton record_id={record_id} fvalue={field} />
<TextInput
  label="RecordId"
  description=""
  placeholder="RecordId"
  value={record_id}
  onChange={(event) => setRecord_id(event.currentTarget.value)}
/>
<TextInput
  label="FieldValue"
  description=""
  placeholder="FieldValue"
  value={field}
  onChange={(event) => setFieldValue(event.currentTarget.value)}
/>
</Flex> */
}
