import { Button } from "../ui/button";

export default function PromotionalBanner() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* 3 Promotional Banners */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* ===== Left Banner: Pet Food & Accessories ===== */}
          <div
            className="relative rounded-lg overflow-hidden p-8 lg:p-10 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/h1-banner1.jpg')",
              backgroundColor: "#C8E6F9",
            }}
          >



            <div className="relative space-y-2 z-10 text-white">
              <div className="flex items-center gap-2 text-[#ff782c] bg-white rounded-full w-[125px] ">
                <span className="text-5xl font-extrabold ml-2 ">50</span>
                <span className="text-2xl font-semibold ">% Off</span>
              </div>
              <h3 className="text-2xl lg:text-xl font-bold leading-tight">
                Pet Food & Accessories
              </h3>
              <p className="text-sm ">Everything for your pet.</p>
            </div>
          </div>

          {/* ===== Middle Banner: Free Shipping ===== */}
          <div
            className="relative rounded-lg overflow-hidden p-8 lg:p-10 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/h1-banner2.jpg')",
              backgroundColor: "#5CD8D4",
            }}
          >


            <div className="relative z-10 space-y-3 text-white">
              <p className="uppercase font-semibold text-sm tracking-wide">
                Free Shipping
              </p>
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                30% <br /> <span className="text-xl font-semibold">Sale Off</span>
              </h3>
              <Button className="bg-white text-[#5CD8D4] hover:bg-gray-100 font-semibold mt-2">
                Shop Now
              </Button>
            </div>
          </div>

          {/* ===== Right Banner: Parrot Food ===== */}
          <div
            className="relative rounded-lg overflow-hidden p-8 lg:p-10 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/h1-banner3.jpg')",
              backgroundColor: "#F8D878",
            }}
           >


            <div className="relative z-10 space-y-1 text-center">
              <h3 className="text-4xl font-extrabold text-white drop-shadow-md">
                Parrot Food
              </h3>
              <p className="italic font-medium text-gray-800 text-lg">
                Healthy formula
              </p>
            </div>
          </div>

        </div>
      </div>


            {/* second layer */}
      <div className="container mx-auto px-6 lg:px-20 mt-4">
         {/* ===== Middle Banner: Free Shipping ===== */}
         <div className="grid grid-cols-2 gap-6">
           <div
            className="relative rounded-lg overflow-hidden p-8 lg:p-10 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/h1-banner4.jpg')",
              backgroundColor: "#5CD8D4",
            }}
          >


            <div className="relative z-10 space-y-3 text-white">
              <p className="uppercase font-semibold text-sm tracking-wide">
               Doggy supply
              </p>
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                25 % Off
              </h3>
              <h4 className="text-xl font-bold">
                Hotline Order <br />(887) 123-4567
              </h4>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden p-8 lg:p-10 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/h1-banner6.jpg)",
              backgroundColor: "#5CD8D4",
            }}
          >


            <div className="relative z-10 space-y-3 text-white">
              <p className="uppercase font-semibold text-sm tracking-wide">
                GIFT FOR PET
              </p>
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Premium <br /> <span className="text-5xl font-semibold">Cat Food</span>
              </h3>
              <h3 className="text-3xl font-semibold">
                Save <span className="text-[#ff782c]">30%</span>
              </h3>
            </div>
          </div>
         </div>
      </div>
    </section>
  );
}
