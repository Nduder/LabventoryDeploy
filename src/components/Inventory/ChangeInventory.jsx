import { Button } from "@mantine/core";

const url = "https://redcap.stanford.edu/api/";

export const ChangeInventoryButton = ({ record_id, fvalue }) => {
  const testdata = [
    { record_id: record_id, sampletotal: fvalue, form_1_complete: "2" },
  ];
  const body = new FormData();
  body.append("token", "923F1811CA8D18DF3F7922D22ED1AB88");
  body.append("content", "record");
  body.append("format", "json");
  body.append("data", JSON.stringify(testdata));

  const params = {
    method: "POST",
    action: "export",
    body,
  };
  const changeInventory = () => {
    fetch(url, params)
      .then((data) => {
        console.log("fetch data: ", data);
        return data.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error: ", error));
  };
  return <Button onClick={changeInventory}>Change Inventory</Button>;
};
