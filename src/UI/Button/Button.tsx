import React from 'react';

import { Btn } from './Button.style';

interface ButtonProps {
  btnType: string
  clicked: () => void
}

const Button: React.FC<ButtonProps> = ({
  btnType, clicked, children,
}) => (
  <Btn className={btnType} onClick={clicked}>
    {children}
  </Btn>
);

export default Button;
