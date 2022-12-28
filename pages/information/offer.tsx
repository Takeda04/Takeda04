import React from 'react';
import { NextPage } from 'next';
import { Main } from 'layouts/main';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';

const offer: NextPage = () => {
  return (
    <Main>
      <Container maxWidth='xl'>
        <Typography mb='10px' variant='h2'>ПРАВОВАЯ ОСНОВА</Typography>
        <Typography mb='10px' variant='body1'>1.1. Оферта разработана в соответствии с Гражданским кодексом Республики Узбекистан, с законами Республики Узбекистан "Об электронной коммерции", "Об электронном документообороте" и другими нормативно-правовыми актами регламентируют осуществление реализации товаров (работ, услуг) в форме электронной коммерции, представленный в официальном Интернет-магазине ООО «FRIENDS CAPITAL» по интернет адресу: M.JALIL 2-tor 90 </Typography>
        <Typography mb='10px' variant='body1'>1.2. Оптовая и розничная торговля, осуществляемая в форме электронной коммерции, регламентируется Положением о порядке осуществления оптовой и розничной торговой деятельности, утвержденным постановлением Кабинета Министров Республики Узбекистан от             26 ноября 2002 г. за № 407, Правилами розничной торговли в Республике Узбекистан, утвержденным постановлением Кабинета Министров Республики Узбекистан от 13 февраля 2003 г. за № 75 и Правилами осуществления электронной коммерции, утвержденным постановлением Кабинета Министров Республики Узбекистан от 02 июня 2016 г. за № 185. </Typography>
        <Typography mb='10px' variant='body1'>1.3. Отношения в области защиты прав потребителей регулируются Гражданским кодексом Республики Узбекистан, Законом Республики Узбекистан «О защите прав потребителей» от                     26 апреля 1996 года. за №221-I и другими нормативно-правовыми актами Республики Узбекистан.</Typography>
        <Typography mb='10px' variant='h2'>МОМЕНТ ЗАКЛЮЧЕНИЯ ДОГОВОРА</Typography>

        <Typography mb='10px' variant='body1'>5.1. Текст данного Договора является публичной офертой (в соответствии с частью 2 ст. 369 и ст. 426 Гражданского кодекса Республики Узбекистан). </Typography>
        <Typography mb='10px' variant='body1'>5.2. Договор, заключаемый на основании акцептирования Покупателем, настоящей оферты является договором присоединения, к которому Покупатель присоединяется без каких-либо исключений и/или оговорок. </Typography>
        <Typography mb='10px' variant='body1'>5.3. Товары и услуги, представленные на сайте через графические изображения-образцы, являются собственностью интернет-магазина. </Typography>
        <Typography mb='10px' variant='body1'>5.4. В связи с разными техническими характеристиками мониторов, цвет Товара может отличаться от представленного на сайте. </Typography>
        <Typography mb='10px' variant='body1'>5.5. Внешний вид и характеристики Товара может отличаться от описанного на сайте. </Typography>
        <Typography mb='10px' variant='body1'>5.6. По просьбе Покупателя менеджер интернет-магазина обязан предоставить (по телефону или посредством электронной почты) информацию, необходимую и достаточную, с точки зрения Покупателя, для принятия им решения о покупке товара.</Typography>
        <Typography mb='10px' variant='body1'>5.7. Факт оформления заказа Покупателем является безоговорочным фактом принятия Покупателем условий данного Договора. </Typography>
        <Typography mb='10px' variant='body1'>5.8. Покупатель, приобретший товар в Интернет-магазине Продавца (оформивший заказ товара), рассматривается как лицо, вступившее с Продавцом в отношения на условиях настоящего Договора.</Typography>
      
      </Container>
    </Main>
  )
}

export default offer