"use client";

import { products } from "@/features/services/data/products";
import CardProduct from "@/features/services/components/CardProducts";

export default function ProductPage() {
  return (
    <>
      <div className="container mx-auto px-5 my-30">
        <h1 className="text-4xl">Uber apps, products, and other offerings</h1>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <p>
            Uber is a technology company whose mission is to reimagine the way
            the world moves for the better. Our technology helps us develop and
            maintain multisided platforms that match consumers looking for rides
            and independent providers of ride services, as well as with other
            forms of transportation, including public transit, bikes, and
            scooters.
          </p>
          <p>
            We also connect consumers and restaurants, grocers, and other
            merchants so they can buy and sell meals, groceries, and other
            items, then we match them with independent delivery service
            providers. Plus, Uber connects shippers and carriers in the freight
            industry. Our technology helps people connect and move in over 70
            countries and 10,000 cities around the world.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 my-50 justify-center">
        <h1 className="text-4xl">{`Uber's most popular ride options`}</h1>
        <p>Request a ride, hop in, and go.</p>
        <div className="flex flex-col md:flex-row flex-wrap mt-5 mx-auto gap-3">
          {products.rides.map((product, i) => {
            return (
              <CardProduct.Small
                key={i}
                image={product.image}
                name={product.name}
                description={product.description}
              />
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-5 my-50">
        <h1 className="text-4xl">{`Food delivery on demand`}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {products.eats.map((product, i) => {
            return (
              <CardProduct.Large
                key={i}
                image={product.image}
                name={product.name}
                description={product.description}
                url={product.url}
                url_text={product.url_text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
