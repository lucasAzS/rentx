import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from 'src/dtos/CarDTO';

import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  About,
  Brand,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
  CarImage,
} from './styles';

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{`R$ ${data.rent.period}`}</Period>
            <Price>{`R$ ${data.rent.price}`} </Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode='contain'
      />
    </Container>
  );
}
