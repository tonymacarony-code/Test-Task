import * as React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardsWrapper from '@/components/CardsWrapper';
import FormWrapper from '@/components/FormWrapper';



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardsWrapper />
      <FormWrapper />
    </>
  );
}