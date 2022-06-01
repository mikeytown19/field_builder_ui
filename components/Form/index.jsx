import { styled } from '../../stitches.config'
import Input from './Input'
import Box from '../Box'
import Button from '../Button'

import { validateFormFields, matches } from "../../js/helpers";

const StyledForm = styled('form', {
  px: "$6", py: "$4"
})

const Form = ({
  FieldService,
  setToastTitle,
  updateFields,
  setOpen,
  fields
}) => {

  const setOpenTimer = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };


  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Box
        css={{
          py: "$4",
          display: "flex",
          flexDirection: "column",
          gap: "$4",
        }}
      >
        <Box className="field_container">
          <label htmlFor="type">Type</label>

          <Input
            css={{ mx: "$4" }}
            as="select"
            value={fields.type}
            onChange={(e) => {

              updateFields({ ...fields, type: e.target.value });
            }}
            id="type"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
            <option value="tel">Phone</option>
            <option value="select">Select</option>


          </Input>
        </Box>


        <Box className="field_container">
          <label htmlFor="sales">Label</label>
          <Input
            css={{
              mx: "$4",
            }}
            type="text"
            value={fields.label}
            id="sales"
            className={validateFormFields(fields).label ? "" : "warning"}
            onChange={(e) => {
              updateFields({ ...fields, label: e.target.value });
            }}
          />
          <Box as="span" css={{ color: "$red10", fontSize: "$1" }}>
            {validateFormFields(fields).label ? "" : "required"}
          </Box>
        </Box>






        {fields.type === "select" ? (<>

          <Box className="field_container">
            <label htmlFor="default_value">Default Value</label>
            <Input
              as="select"
              css={{ mx: "$4" }}
              type="text"
              value={fields.default}
              placeholder="asia"
              id="default_value"
              onChange={(e) =>
                updateFields({ ...fields, default: e.target.value })
              }
            >
              {fields.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </Input>
          </Box>

          <Box css={{ position: "relative" }} className="field_container">
            <label htmlFor="add_choice">Add Choice</label>

            <Input
              css={{ mx: "$4", width: "400px", '@bp2': { width: 'auto' } }}
              type="text"
              value={fields.choice}
              placeholder={fields.choices[0]}
              id="add_choice"
              className={validateFormFields(fields).choice ? "" : "warning"}
              onChange={(e) => {
                if (e.target.value.length > 40) {
                  setToastTitle("Input cannot be longer than 40 characters");
                  setOpen(true);
                } else if (e.target.value.length < 40) {
                  setOpen(false)
                }
                updateFields({ ...fields, choice: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (matches(fields.choices, fields.choice).length) {
                    setOpenTimer();
                  } else {
                    updateFields({
                      ...fields,
                      choices: [...fields.choices, fields.choice],
                      choice: "",
                    });
                  }
                }
              }}
            />
            <Box

              as="span"
              css={{
                color: "transparent",
                position: "absolute",
                left: "365px",
                top: "15px",
                borderBottom: "2px solid $red10",
                fontSize: "13.3px",
              }}
            >
              {fields.choice.slice(40)}
            </Box>
          </Box>

          <Box>
            <Box

              css={{
                height: "200px",
                bg: "$blue2",
                width: "300px",
                pt: "$1",
                overflowY: "scroll",
                '@bp2': { width: 'auto' }
              }}
            >
              {fields.choices.length <= 50 &&
                fields.choices
                  .sort((a, b) =>
                    fields.displayAlpha
                      ? a.localeCompare(b)
                      : b.localeCompare(a)
                  )
                  .map((choice, index) => (
                    <Box
                      css={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: "4px",
                        px: "$3",
                        ".remove": {
                          display: "none",
                        },
                        "&:hover": {
                          cursor: "pointer",
                          bg: "$blue4",
                          ".remove": {
                            display: "block",
                          },
                        },
                      }}
                    >
                      {choice}
                      <Box
                        as="span"
                        className="remove"
                        css={{ color: "$blue7" }}
                        onClick={() =>
                          updateFields({
                            ...fields,
                            choices: [
                              ...fields.choices.slice(0, index),
                              ...fields.choices.slice(index + 1),
                            ],
                          })
                        }
                      >
                        X
                      </Box>
                    </Box>
                  ))}
            </Box>
          </Box>
          <Box className="field_container">
            <label htmlFor="display">Order</label>
            <Input
              as="select"
              css={{ mx: "$4" }}
              id="display"
              onChange={(e) =>
                updateFields({ ...fields, displayAlpha: e.target.value })
              }
            >
              <option value={"true"}>Display choices in A-Z</option>
              <option value={""}>Display choices in Z-A</option>
            </Input>
          </Box>
        </>
        ) : (<>
          <Box className="field_container">
            <label htmlFor="default_value">placeholder</label>
            <Input

              css={{ mx: "$4" }}
              type="text"
              placeholder={`Enter ${fields.type}`}
              onChange={(e) =>
                updateFields({ ...fields, default: e.target.value })
              }
            />
          </Box>
        </>)}


      </Box>
      <Button
        size="large"
        variant="green"
        type="button"
        onClick={() => {
          if (Object.values(validateFormFields(fields)).every(Boolean)) {
            FieldService.postForm(fields);
          } else {
            setToastTitle("Required fields missing");
            setOpenTimer();
          }
        }}
      >
        Save
      </Button>
      <Button
        css={{ ml: "$4" }}
        size="large"
        variant="red"
        type="button"
        onClick={() =>
          updateFields({
            label: "",
            type: "",
            required: "",
            default: "",
            choices: [],
            choice: "",
            displayAlpha: "",
          })
        }
      >
        Clear
      </Button>
    </StyledForm>)
}

export default Form