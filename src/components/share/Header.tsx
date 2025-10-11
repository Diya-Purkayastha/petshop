import { HomeMenu } from "@/config/menu";
import { Heart, MapPin, Search, ShoppingCart, Truck, User } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="w-full border-b  bg-card">
      {/* top bar */}
      <div className="bg-[#9160d7] text-white ">
        <div className="container mx-auto px-20 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:opacity-50 transition-opacity">
              {/* map icon */}
              <MapPin className="h-4 w-4" />
              <span>Find a Store</span>
            </button>

            {/* Order Tracking  */}
            <button className="flex items-center gap-2 hover:opacity-50 transition-opacity ">
              <Truck className="w-4 h-4" />
              <span>Order Tracking</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold">15% off</span>
            <span>$50+ when you buy online & pick up in-store</span>
          </div>

          <div className="flex items-center gap-4">
            <select className="bg-transparent border-none text-white">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>

            <select className="bg-transparent border-none text-white">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>

      {/* main header */}
      <div className="container mx-auto px-20 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Pet</span>
              <span className="text-2xl font-bold">Shop</span>
            </div>
          </Link>

          {/* menu items */}
          <nav className="hidden lg:flex items-center gap-8">
            {/*  */}

            {HomeMenu.map(({ id, title, href }) => (
              <Link
                key={id}
                href={href}
                className="text-sm hover:text-primary transition-colors"
              >
                {title}
              </Link>
            ))}
          </nav>

          {/* search */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Product"
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" className="" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" className="relative" size="icon">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-white bg-amber-600 rounded-full text-xl flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="ghost" className="relative" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-white bg-amber-600 rounded-full text-xl flex items-center justify-center">
                3
              </span>
            </Button>
          </div>

          {/* end of main menu */}
        </div>
      </div>
    </header>
  );
}
