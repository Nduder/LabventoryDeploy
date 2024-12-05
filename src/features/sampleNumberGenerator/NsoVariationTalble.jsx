import { useState } from "react";
import { Table, Checkbox } from "@mantine/core";

// const elements = [
//   { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
//   { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
//   { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
//   { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
//   { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
// ];

export function NsoVariationTable({ sampleVariations }) {
  const [selectedRows, setSelectedRows] = useState([]);
  let elements = sampleVariations;
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={
        selectedRows.includes(element.position)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        {/* <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter(
                    (position) => position !== element.position
                  )
            )
          }
        /> */}
      </Table.Td>
      <Table.Td>{element.prefix[0]}</Table.Td>
      <Table.Td>{element.suffix[0]}</Table.Td>
      <Table.Td>{element.total}</Table.Td>
      <Table.Td>{element.numbered ? "numbered" : "unnumbered"}</Table.Td>
      <Table.Td>
        {element.prefix[0] +
          "900" +
          element.suffix[0] +
          (element.numbered ? "01" + "-" + element.total : "")}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Prefix</Table.Th>
          <Table.Th>Suffix</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th>Numbered</Table.Th>
          <Table.Th>Example</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
