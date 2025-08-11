import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow p-4 w-full max-w-sm">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-contain mb-4"
      />
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-500 text-sm mt-1 mb-2">{product.category}</p>
      <p className="text-sm text-gray-700 line-clamp-3">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">${product.price}</span>
        <span className="text-sm text-yellow-500">⭐ {product?.rating?.rate} ({product?.rating?.count})</span>
      </div>
    </div>
  );
};

export default ProductCard;
