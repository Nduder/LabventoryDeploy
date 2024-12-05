const url = "https://redcap.stanford.edu/api/";

const testdata = [
  { record_id: "2", sampletotal: "itworkswithFormData", form_1_complete: "2" },
  { record_id: "9", sampletotal: "8", form_1_complete: "2" },
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
fetch(url, params)
  .then((data) => {
    console.log("fetch data: ", data);
    return data.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));
