import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Product, ProductLarge } from "../types";

const CardProduct = (children: { children: ReactNode }) => {
  return <>{children}</>;
};

const CardProductSmall = ({ image, name, description }: Product) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm transition ease-in-out duration-300 hover:shadow-lg">
      <figure className="w-full h-60 block relative">
        <Image src={image} alt={name} className="object-cover" fill />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const CardProductLarge = ({
  image,
  name,
  description,
  url,
  url_text,
}: ProductLarge) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm transition ease-in-out duration-300 hover:shadow-lg">
      <figure className="w-full h-80 block relative">
        <Image src={image} alt={name} className="object-cover" fill />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link href={url} className="link link-neutral" target="_blank">
            {url_text}
          </Link>
        </div>
      </div>
    </div>
  );
};

CardProduct.Small = CardProductSmall;
CardProduct.Large = CardProductLarge;

export default CardProduct;
