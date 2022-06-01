import { styled } from '../../stitches.config';

const Input = styled('input', {
  border: 'solid $blue3 2px',
  padding: '$2 $3',
  bg: '$blue2',
  br: '$2',
  "&.warning": {
    border: "red solid 2px",
    "&:focus": {
      border: "red solid 2px",
      outline: "none",
    },
  },
});

export default Input;
