import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, defaultValue, error, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <label htmlFor={name}>{label}</label>
      <input defaultValue={defaultValue} id={name} ref={inputRef} {...rest} />
      <span>{error}</span>
    </Container>
  );
};

export default Input;
