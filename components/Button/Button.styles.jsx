

import { styled } from '../../stitches.config';

const Button = styled('button', {
  border: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '$3 $5',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  '&:hover': {
    cursor: 'pointer'
  },
  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '0 10px',
        lineHeight: '25px',
        height: 25,
      },
      large: {
        fontSize: 14,
        padding: '5px 16px',
        lineHeight: '25px',
        height: 25,
      },
    },
    variant: {

      red: {
        backgroundColor: '$red3',
        color: '$red11',
        boxShadow: `inset 0 0 0 1px $red7`,
        transition: 'background-color 100ms ease-out',
        '&:hover': {
          backgroundColor: '$red4',
          boxShadow: 'inset 0 0 0 1px $red8'
        },
        '&:focus': { boxShadow: '0 0 0 2px $red8' },
      },
      blue: {
        backgroundColor: '$blue3',
        color: '$blue11',
        boxShadow: `inset 0 0 0 1px $blue7`,
        transition: 'background-color 100ms ease-out',
        '&:hover': {
          backgroundColor: '$blue4',
          boxShadow: `inset 0 0 0 1px $blue8`
        },
        '&:focus': { boxShadow: `0 0 0 2px $blue8` },
      },
      green: {
        backgroundColor: '$green3',
        color: '$green11',
        boxShadow: `inset 0 0 0 1px $green7`,
        transition: 'background-color 100ms ease-out',
        '&:hover': { boxShadow: `inset 0 0 0 1px $green8`, backgroundColor: '$green4', },
        '&:focus': { boxShadow: `0 0 0 2px $green8` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

export default Button