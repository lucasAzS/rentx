import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText,
  ChangeVisibilityButton,
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ iconName, ...rest }: InputProps) {
  const [isPassVisible, setIsPassVisible] = useState(true);
  const theme = useTheme();

  function handlePassVisibilityChange() {
    setIsPassVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText secureTextEntry={isPassVisible} {...rest} />

      <ChangeVisibilityButton onPress={handlePassVisibilityChange}>
        <IconContainer>
          <Feather
            name={isPassVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </ChangeVisibilityButton>
    </Container>
  );
}
