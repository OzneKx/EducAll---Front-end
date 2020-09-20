import React, { InputHTMLAttributes, useState, useEffect } from 'react';
import { IconBase } from 'react-icons';

import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(() => []);

  useEffect() => {
    setIsFocused(!!isFocused);
  }, [isFocused];

  return

}


