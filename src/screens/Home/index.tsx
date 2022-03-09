import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  const carData = {
    brand: 'Fiat',
    name: 'Uno',
    rent: {
      price: 100,
      period: 'diária',
    },
    thumbnail:
      'https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/profile.png',
  };

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
}
