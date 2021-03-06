import React, { ChangeEvent, FocusEvent } from 'react';
import classes from './Input.module.scss';
import classnames from 'classnames';

interface InputProps {
  value?: string | number;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string | string[];
  label?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  value = '',
  placeholder = '',
  name = '',
  label = '',
  error = '',
  type = 'text',
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
}) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        className={classnames(classes.input, {
          [classes['input--disabled']]: disabled,
          [classes['input--error']]: error,
        })}
        value={value}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className={classes.input__error}>{error}</div>}
    </>
  );
};

export default Input;
