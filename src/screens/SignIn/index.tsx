import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import * as Yup from 'yup';

import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Header, Title, SubTitle, Footer, Form } from './styles';

export function SignIn() {
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
      Alert.alert('Tudo certo!');
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        return Alert.alert('Opa', e.message);
      } else {
        Alert.alert('Erro na autenticação', 'Verifique as credenciais');
      }
    }
  }

  const theme = useTheme();

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
              onPress={() => {}}
              enabled={false}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
