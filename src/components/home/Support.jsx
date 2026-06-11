import { Box, RefreshCw, ShieldCheck, Truck,  } from "lucide-react";
import React from "react";

const Support = () => {
  const supports = [
    { title: "Free Shipping", desc: "Capped at $39 per order", icon: Truck },
    {
      title: "Securety Payments",
      desc: "Up to 12 months installments",
      icon: ShieldCheck,
    },
    {
      title: "14-Day Returns",
      desc: "Shop with confidence",
      icon: RefreshCw,
    },
    {
      title: "Free Fabric Swatches",
      desc: "Delivered to your door",
      icon: Box,
    },
  ];
  return (
    <section className="my-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">

        {supports.map((support, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3 font-serif">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-black">
              <support.icon size={24} />
            </div>
            <h3 className="text-sm font-medium">{support.title}</h3>
            <p className="text-sm text-gray-500">{support.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
