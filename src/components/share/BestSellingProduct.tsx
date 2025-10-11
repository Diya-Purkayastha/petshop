import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Products } from "@/config/product";
import { Button } from "../ui/button";

export default function BestSellingProduct() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold flex items-center gap-12">
            Best Selling Products
          </h2>
          <Link
            href="/product"
            className="flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            View All Product
          </Link>
        </div>

        {/* product list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {Products.map((product) => (
            <Card key={product.id}>
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.images}
                  width="100"
                  height="100"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button>

                    </Button>
                </div> */}

                {/* add to card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Button size="lg" className=" w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add To Card
                  </Button>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
  const full = i + 1 <= Math.floor(product.rating); // full yellow
  const half = product.rating - i > 0 && product.rating - i < 1; // check for half

  return (
    <div key={i} className="relative w-5 h-5 inline-block">
      {/* Base gray star */}
      <Star className="absolute text-gray-300" />

      {/* Yellow overlay */}
      {full && <Star className="absolute text-yellow-400" />}
      {half && (
        <div className="absolute overflow-hidden w-1/2">
          <Star className="text-yellow-400" />
        </div>
      )}
    </div>
  );
})}

                  <span className="text-xs text-muted-foreground ml-1">
                    {product.reviews} reviews
                  </span>
                </div>

                {/* title */}
                <h3 className="font-semibold text-muted-foreground ml-1">
                  {product.name}
                </h3>

                {/* price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {product.priceIcon} {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.priceIcon} {product.originalPrice}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
