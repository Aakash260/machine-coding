import React, { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';

 

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [no, setNo] = useState(6);
  const loaderRef = useRef(null);


  useEffect(() => {
    if (no > 20) return; // Avoid invalid IDs
    fetch(`https://fakestoreapi.com/products?limit=${no}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [no]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setNo((prev) => prev + 6);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {no <= 20 && (
        <div ref={loaderRef} className="h-10 bg-red-400"></div>
      )}
    </div>
  );
};

export default ProductPage;
