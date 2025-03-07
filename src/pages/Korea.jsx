import React from 'react';
import Image from '../components/Image';
import Flower from'../assets/Flower.png'
const Korea = () => {
  return (
    <div>
      <h1>This is Korea</h1>
      <a target='_blank' href='https://www.google.com/search?sca_esv=d1b5b4900a6ad200&sxsrf=AHTn8zqtALkqVWVs9EZOXxgY-HtIM06WoQ:1741322975878&q=rose+pictures&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBmQC-et4UnwhHFEfTDjtrGg-xS-t736QShNPCBz-Y1jyJzF6Coga4SreGLghap2jKgn2pN2JDVEyXndM4zEzyBWiRhJvBrMDvuxy8pyFPA6gMxR9Pee_Ceo3KFqW5YDyuXR0uCYnYQ-TlcruXsTwqSNPsnKo&sa=X&ved=2ahUKEwj8larLlfeLAxVFzDgGHaifNVUQtKgLegQIEhAB&biw=1366&bih=633&dpr=1'>Image</a>
      <Image src={Flower}/>
    </div>
  );
}

export default Korea;
