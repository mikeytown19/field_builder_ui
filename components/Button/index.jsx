import StyledButton from './Button.styles'

const Button = ({ size, variant, loading, disabled, onClick, children, ...props }) => {

  return (
    <StyledButton
      size={size}
      variant={variant}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button