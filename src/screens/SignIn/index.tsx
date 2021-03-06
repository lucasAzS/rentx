import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import * as Yup from 'yup';

import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Header, Title, SubTitle, Footer, Form } from './styles';

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSigIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email Obrigatório')
          .email('Digite um Email Válido'),
        password: Yup.string().required('A Senha é Obrigatória'),
      });

      await schema.validate({ email, password });

      signIn({ email, password });
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        return Alert.alert('Opa', e.message);
      } else {
        Alert.alert('Erro na autenticação', 'Verifique as credenciais');
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep');
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>Estamos{'\n'} quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSigIn}
              enabled={true}
              loading={false}
            />

            <Button
              title='Criar Conta'
              color={theme.colors.background_primary}
              light
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
