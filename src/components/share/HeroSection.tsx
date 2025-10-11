import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary vai-background to-secondary">
      <div className="container mx-auto px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left  */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                GET 10% DISCOUNT
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
              Best Food For Your Dog
            </h1>
            <p className="text-lg text-muted-foreground max-w-md text-pretty">
              Help your dog maintain a healthier weight with.
            </p>
            <Button size="lg" className="gap-2 group">
              Shop Now
              {/* icon arrow */}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* right */}
          <div className="">
            {/* <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-xs font-semibold mt-1">100%</div>
                <div className="text-xs text-muted-foreground">Organic</div>
                <div className="text-xs text-muted-foreground">Pet Food</div>
              </div>
            </div> */}
            <Image
              src="/images/hero.png"
              width="100"
              height="100"
              alt="hero images"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
