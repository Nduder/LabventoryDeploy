import { Button } from "@mantine/core";

const url = "https://redcap.stanford.edu/api/";

let token = "INSERT API KEY HERE";

export const GetRecordButton = ({ setRedcapRecords }) => {
  const handleClick = () => {
    const body = new FormData();
    body.append("token", token);
    body.append("content", "record");
    body.append("format", "json");

    const params = {
      method: "POST",
      action: "export",
      body,
    };
    fetch(url, params)
      .then((data) => {
        return data.json();
      })
      .then((data) => setRedcapRecords(data))
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <div>
      <Button onClick={handleClick}>Get Records</Button>
    </div>
  );
};
