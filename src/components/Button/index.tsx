import React, { ButtonHTMLAttributes } from 'react';
import { RiLoaderLine } from 'react-icons/ri';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container loading={loading || undefined} type="button" {...rest}>
    {loading ? <RiLoaderLine size={24} /> : children}
  </Container>
);

export default Button;
