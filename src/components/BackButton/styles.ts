import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(BorderlessButton)`
  padding-top: ${getStatusBarHeight()}px;
`;
