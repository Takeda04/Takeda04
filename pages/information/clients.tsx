import React from 'react';
import { NextPage } from 'next';
import { Main } from 'layouts/main';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';


const clients: NextPage = () => {
  return (
    <Main>
      <Container maxWidth='xl'>
        <Typography mb='10px' variant='h2'>ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</Typography>
        <Typography mb='10px' variant='body1'>2.1. В настоящей оферте, если контекст не требует иного, нижеприведенные термины имеют следующие значения и являются ее составной неотъемлемой частью:</Typography>
        <Typography mb='10px' variant='body1'>Акцепт — согласие с предложением (офертой) на заключение договора на условиях, указанных в предложении влекущее за собой правовые последствия.</Typography>
        <Typography mb='10px' variant='body1' sx={{'span':{color:'red',cursor:'pointer'}}}>Заказ Товара на сайте интернет-магазина — позиции, указанные Покупателем из ассортимента Товара, предложенного к продаже, при оформлении заявки на приобретение Товара на сайте Интернет-магазина ООО «FRIENDS CAPITAL» по интернет адресу:<Link href='/'><span>www.gipermart.uz</span></Link> или через Оператора по телефону</Typography>
        <Typography mb='10px' variant='body1' sx={{'span':{color:'red',cursor:'pointer'}}}>Интернет-магазин — официальный Интернет-магазин Продавца ООО «FRIENDS CAPITAL», расположенный по интернет адресу:<Link href='/'><span>www.gipermart.uz</span></Link>  </Typography>
        <Typography mb='10px' variant='body1'>Оферта — предложение, адресованное одному лицу, нескольким конкретным лицам или неопределенному кругу лиц, содержащее все существенные условия договора, из которого усматривается воля лица, делающего предложение (оферента), заключить договор на указанных в предложении условиях с любым, кто отзовется.</Typography>
        <Typography mb='10px' variant='body1'>Продавец — Интернет-магазин розничной торговли ООО «FRIENDS CAPITAL».</Typography>
        <Typography mb='10px' variant='body1'>Покупатель — любое физическое лицо (резиденты и нерезиденты Республики Узбекистан), приобретающие товары (работы, услуги) с использованием информационных систем для конечного потребления, акцептировавшее публичную оферту на условиях настоящей оферты.</Typography>
        <Typography sx={{'span':{color:'red',cursor:'pointer'}}} mb='10px' variant='body1'>Товар — объект соглашения сторон, перечень наименований ассортимента, представленный в официальном Интернет-магазине ООО «FRIENDS CAPITAL» по интернет адресу: <Link href='/'><span>www.gipermart.uz</span></Link> </Typography>
        <Typography mb='10px' variant='body1'>Участник электронной коммерции —физическое лицо, являющееся Продавцом или Покупателем товаров (работ, услуг) в электронной коммерции.</Typography>
        <Typography mb='10px' variant='h2'>ОФОРМЛЕНИЕ ЗАКАЗА</Typography>
        <Typography mb='10px' variant='body1'>7.1. Заказ Товара осуществляется Покупателем через сервис сайта Интернет-магазина www.gipermart.uz. Покупатель обязательно должен уточнить о наличии товара и более подробную информацию о продукте у оператора сайта по телефону. </Typography>
        <Typography mb='10px' variant='body1'>7.2. При регистрации на сайте Интернет-магазина Покупатель обязуется предоставить следующую регистрационную информацию: </Typography>
        <Typography mb='10px' variant='body1'>7.2.1. Фамилия, имя, отчество, возраст Покупателя или указанного им лица (получателя); </Typography>
        <Typography mb='10px' variant='body1'>7.2.2. Адрес, по которому следует доставить Товар (если доставка до адреса Покупателя); </Typography>
        <Typography mb='10px' variant='body1'>7.2.3. Адрес электронной почты; </Typography>
        <Typography mb='10px' variant='body1'>7.2.4. Контактные телефоны. </Typography>
        <Typography mb='10px' variant='body1'>7.3. Наименование, количество, ассортимент, артикул, цена выбранного Покупателем Товара указываются в корзине Покупателя на сайте Интернет-магазина. </Typography>
        <Typography mb='10px' variant='body1'>7.4. Если Продавцу необходима дополнительная информация, он вправе запросить ее у Покупателя. В случае не предоставления необходимой информации Покупателем, Продавец не несет ответственности за выбранный Покупателем Товар. </Typography>
        <Typography mb='10px' variant='body1'>7.5. Принятие Покупателем условий настоящей Оферты осуществляется посредством внесения Покупателем соответствующих данных в регистрационную форму на сайте Интернет-магазина или при оформлении Заказа через Оператора. После оформления Заказа через Оператора данные о Покупателе регистрируются в базе данных Продавца. Утвердив Заказ выбранного Товара, Покупатель предоставляет Оператору необходимую информацию в соответствии с порядком, указанном в п.</Typography>
        <Typography mb='10px' variant='body1'>7.2. настоящей Оферты. </Typography>
        <Typography mb='10px' variant='body1'>7.6. Продавец не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении Заказа. </Typography>
        <Typography mb='10px' variant='body1'>7.7. Покупатель несет ответственность за достоверность предоставленной информации при оформлении Заказа. </Typography>
        <Typography mb='10px' variant='body1'>7.8. Договор купли-продажи дистанционным способом между Продавцом и Покупателем считается заключенным с момента оформлении Заказа.</Typography>
    
      </Container>
    </Main>
  )
}
{/* <Typography variant='body1'></Typography> */ }


export default clients;
