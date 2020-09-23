import React from 'react';

import { Btn } from './Button.style';

interface ButtonProps {
  btnType: string
  clicked: () => void
}

const Button: React.FC<ButtonProps> = ({
  btnType, clicked, children, ...other
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Btn btnType={btnType} onClick={clicked} {...other}>
    {children}
  </Btn>
);

export default Button;
