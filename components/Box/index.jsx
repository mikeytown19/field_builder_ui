import { styled } from '../../stitches.config';

const Box = styled('div', {

  "&.field_container": {
    display: "flex",
    flexDirection: "column",
    alignItems: 'start',


    gap: "$1",
    "&  select, input": {
      mx: "0"
    },
    "label": {
      fontSize: "$1",
    }
  }

});

export default Box;
