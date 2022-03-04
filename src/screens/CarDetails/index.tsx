import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { CarImages, Container, Header } from './styles';

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
    </Container>
  );
}
