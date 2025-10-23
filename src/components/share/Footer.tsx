import Image from "next/image";
import {
  Phone,
  Mail,
  Smartphone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 mt-20 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">
        {/* --- Logo + Info --- */}
        <div className="space-y-5 col-span-1">
          <Image
            src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/logo.svg"
            alt="Ziggy Logo"
            width={150}
            height={50}
          />
          <p className="text-gray-500 leading-relaxed">
            We know pets are like family, so we are committed to providing the
            highest-quality products that you can trust.
          </p>

          <div>
            <p className="flex items-center gap-2 font-semibold">
              <Phone size={18} className="text-[#ff6600]" />
              Hotline Order
            </p>
            <p className="text-[#ff6600] text-2xl font-bold">(877) 123 4567</p>
          </div>

          <div className="flex items-center gap-3 pt-3">
            {/* <div className="bg-gray-100 p-2 rounded-full hover:bg-[#ff6600] hover:text-white transition">
              <Facebook size={18} />
            </div>
            <div className="bg-gray-100 p-2 rounded-full hover:bg-[#ff6600] hover:text-white transition">
              <Twitter size={18} />
            </div>
            <div className="bg-gray-100 p-2 rounded-full hover:bg-[#ff6600] hover:text-white transition">
              <Instagram size={18} />
            </div>
            <div className="bg-gray-100 p-2 rounded-full hover:bg-[#ff6600] hover:text-white transition">
              <Pinterest size={18} />
            </div> */}
          </div>
        </div>

        {/* --- Useful Links --- */}
        <div>
          <h3 className="font-bold text-black mb-4 uppercase text-sm">
            Useful Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>New Products</li>
            <li>Best Sellers</li>
            <li>Bundle & Save</li>
            <li>Online Gift Card</li>
            <li>Discount</li>
            <li>Pet Store Locator</li>
          </ul>
        </div>

        {/* --- My Account --- */}
        <div>
          <h3 className="font-bold text-black mb-4 uppercase text-sm">
            My Account
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>My Profile</li>
            <li>My Order History</li>
            <li>My Wish List</li>
            <li>Order Tracking</li>
            <li>Shipping Info</li>
            <li>Shopping Cart</li>
          </ul>
        </div>

        {/* --- Company --- */}
        <div>
          <h3 className="font-bold text-black mb-4 uppercase text-sm">
            Company
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Affiliate</li>
            <li>Contact Us</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h3 className="font-bold text-black mb-4 uppercase text-sm">
            Newsletter
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe & get <span className="text-[#ff6600]">10%</span> discount.
            Get E-mail updates about our latest shop and{" "}
            <span className="text-[#ff6600]">special offers.</span>
          </p>
          <div className="relative mb-5">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full bg-gray-100 rounded-full px-5 py-3 outline-none text-sm"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7b2ff7] hover:bg-[#6a25d9] text-white rounded-full p-3">
              <Mail size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Smartphone className="text-black" size={18} />
            <p className="font-semibold text-black">Download Our App</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/app-store.png"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/google-play.png"
              alt="Google Play"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* --- Bottom Footer --- */}
      <div className="border-t border-gray-200 pt-5 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <p>
          Copyright © 2022 <span className="font-bold text-black">Ziggy</span>.
          All rights reserved.
        </p>
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <Image
            src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/payment.png"
            alt="Payment Icons"
            width={220}
            height={30}
          />
        </div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-black">
            Privacy & Cookie Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
