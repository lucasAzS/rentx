import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDatesProps,
} from '../../components/Calendar';
import { BackButton } from '../../components/BackButton';

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps
  );

  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim de aluguel {'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
