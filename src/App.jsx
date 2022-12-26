import React from 'react';
import Foods from './Foods';
import data from './data.json';
import Navbar from './Navbar';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar data={data} />
      <section className="container">
        <div className="row align-items-center justify-content-center">
          <Foods {...data} />
        </div>
      </section>
    </>
  );
}
