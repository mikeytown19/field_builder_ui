import React from "react";

import { FieldService } from "../js/MockService";

import Box from "../components/Box";
import Form from "../components/Form";
import Toast from "../components/Toast";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [toastTitle, setToastTitle] = React.useState("Choice already Exists");

  let localFields;

  if (typeof window !== "undefined") {
    localFields = JSON.parse(localStorage.getItem("fields"));
  }

  const [fields, updateFields] = React.useState(
    localFields || {
      ...FieldService.getField(),
      choice: "",
    }
  );

  // check local storage for data
  React.useEffect(() => {
    const localFields = JSON.parse(localStorage.getItem("fields"));
    if (localFields) {
      updateFields(localFields);
    }
  }, []);

  // save data to local storage
  React.useEffect(() => {
    localStorage.setItem("fields", JSON.stringify(fields));
  }, [fields]);

  return (
    <Box css={{ padding: "$10" }}>
      <Box css={{ border: "$blue5 solid 1px", br: "$2" }}>
        <Box css={{ p: "$3", bg: "$blue3" }}>Field Builder</Box>
        <Form
          FieldService={FieldService}
          setToastTitle={setToastTitle}
          updateFields={updateFields}
          fields={fields}
          setOpen={setOpen}
        />
      </Box>

      {open && <Toast title={toastTitle} />}
    </Box>
  );
}
