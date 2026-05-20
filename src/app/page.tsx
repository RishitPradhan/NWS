import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StudioShowcase, { Product } from '@/components/StudioShowcase';
import Services from '@/components/Services';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import InteractiveProvider from '@/components/InteractiveProvider';
import { client } from '@/sanity/client';

export const revalidate = 60; // Revalidate dynamic Sanity data every minute

async function getProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product"]{
      _id,
      title,
      category,
      tagline,
      description,
      slug
    }`;
    const products = await client.fetch<Product[]>(query);
    return products;
  } catch (error) {
    console.error("Failed to fetch products from Sanity CMS:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <InteractiveProvider>
      <Navigation />
      <Hero />
      <StudioShowcase products={products} />
      <Services />
      <About />
      <FinalCTA />
      <Footer />
    </InteractiveProvider>
  );
}
