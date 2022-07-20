import styled, { css } from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariantsColor = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
  neutral: 'gray',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin-right: 4px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariantsColor[props.variant]};
    `
  }} */
`
