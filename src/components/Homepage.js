import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css'

export default function Homepage(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>My Studies</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
    <a href="/#/easter">
      <Card>
      <Card.Title>He Is Risen</Card.Title>
      <Card.Img className={'pictures'} variant={'top'} src={'https://www.pngmart.com/files/21/Christian-Cross-Silhoutte-Transparent-PNG.png'}></Card.Img>
      </Card>
    </a>
    </div>
    </>


  )
}
