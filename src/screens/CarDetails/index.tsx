import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  CarImages,
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/profile.png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Fiat</Brand>
            <Name>Uno</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 100,00</Price>
          </Rent>
        </Details>

        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          placeat laboriosam esse, minima obcaecati et tempora nam ex vitae
          perferendis doloremque minus odit nostrum officia distinctio! Labore
          dicta natus voluptatum.
        </About>
      </Content>
    </Container>
  );
}
