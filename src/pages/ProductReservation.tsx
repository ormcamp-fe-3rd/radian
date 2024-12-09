import { useState } from 'react';
import '../styles/ProductReservation.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

const ProductReservation = (): JSX.Element => {
    return (
      <>
        <h2 className="productreservation-midtitle">Color</h2>
        <h2 className="productreservation-midtitle">Battery Type</h2>
        <h2 className="productreservation-midtitle">Drive Type</h2>
        <h2 className="productreservation-midtitle">Virtual Engine Sound</h2>
        <h2 className="productreservation-midtitle">Total</h2>
      </>
    );
  };
  
  export default ProductReservation;