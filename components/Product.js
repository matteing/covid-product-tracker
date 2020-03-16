import React from "react";
import Link from "next/link";
const URL = require("url");

function getUrlHostname(url) {
  try {
    return new URL(product.url).hostname;
  } catch (e) {
    return url;
  }
}

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex mb-4 p-4 bg-white rounded-md border border-gray-400  items-center justify-center cursor-pointer">
        <div className="mr-4">
          <img className="w-12 h-12" src={product.icon} alt={product.name} />
        </div>
        <div className="flex-grow">
          <strong className="text-gray-800">{product.name}</strong>
          <p className="text-gray-700">{product.description}</p>
          <small className="text-gray-600">
            {product.cost} · {product.comments} comments ·{" "}
            {getUrlHostname(product.url)}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Product;
