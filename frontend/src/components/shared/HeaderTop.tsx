// // src/components/shared/HeaderTop.tsx
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FaAngleDown, FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { toast } from "react-toastify";

// const HeaderTop = () => {
//   const [open, setOpen] = useState(false);
//   const [currency, setCurrency] = useState("USD");
//   return (
//     <div className="bg-gray-100 hidden md:block">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
//         {/* left side */}
//         <div className="flex items-center gap-6 text-sm">
//           <div className="flex items-center gap-1">
//             <FaLocationDot size={16} className="text-red-600" />
//             <p className="font-medium">Dhaka, Bangladesh</p>
//           </div>

//           <div className="flex items-center gap-1">
//             <FaPhoneAlt className="text-green-600" />
//             <p className="font-medium">+880 1736-340278</p>
//           </div>
//         </div>

//         {/* right side */}
//         <div className="flex items-center gap-6 text-sm relative">
//           {/* Currency Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setOpen(!open)}
//               className="flex items-center gap-1 font-semibold cursor-pointer"
//             >
//               {currency === "BDT" ? "🇧🇩" : "🇺🇸"} {currency}
//               <FaAngleDown className="text-xs mt-0.5" />
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-50">
//                 <p className="text-xs text-gray-400 mb-3 font-semibold">
//                   SELECT CURRENCY
//                 </p>

//                 {/* USD */}
//                 <div
//                   onClick={() => {
//                     setCurrency("USD");
//                     setOpen(false);
//                   }}
//                   className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer"
//                 >
//                   <div>
//                     <p className="font-semibold text-green-600">US</p>
//                     <p className="text-xs text-gray-400">US Dollar</p>
//                   </div>
//                   {currency === "USD" && (
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   )}
//                 </div>

//                 {/* BDT */}
//                 <div
//                   onClick={() => {
//                     setCurrency("BDT");
//                     setOpen(false);
//                   }}
//                   className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer"
//                 >
//                   <div>
//                     <p className="font-semibold">BDT</p>
//                     <p className="text-xs text-gray-400">Bangladeshi Taka</p>
//                   </div>
//                   {currency === "BDT" && (
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex items-center gap-3">
//             {/* Other Links */}
//             <Link href="/">Help</Link>
//             <Link href="/">Sell on BengalMart</Link>
//             <button className="font-medium cursor-pointer" onClick={()=> toast.info("mobile app coming soon!")}>Download App</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;





// src/components/shared/HeaderTop.tsx
"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";

type Currency = "USD" | "BDT";

const CURRENCIES: { code: Currency; flag: string; name: string }[] = [
  { code: "USD", flag: "🇺🇸", name: "US Dollar" },
  { code: "BDT", flag: "🇧🇩", name: "Bangladeshi Taka" },
];

const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("USD");

  const handleCurrencySelect = useCallback((code: Currency) => {
    setCurrency(code);
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleDownloadApp = useCallback(() => {
    toast.info("Mobile app coming soon!");
  }, []);

  const selectedCurrency = CURRENCIES.find((c) => c.code === currency);

  return (
    <div className="bg-gray-100 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* left side */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <FaLocationDot size={16} className="text-red-600" aria-hidden="true" />
            <p className="font-medium">Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-green-600" aria-hidden="true" />
            <Link href="tel:+8801736340278" className="font-medium hover:text-green-600">
              +880 1736-340278
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-6 text-sm relative">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={handleToggle}
              className="flex items-center gap-1 font-semibold cursor-pointer"
              aria-expanded={open}
              aria-haspopup="listbox"
              aria-label="Select currency"
            >
              {selectedCurrency?.flag} {currency}
              <FaAngleDown
                className={`text-xs mt-0.5 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {/* ✅ Dropdown — conditional render  */}
            {open && (
              <>
                {/* ✅ Backdrop — outside click on close */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpen(false)}
                  aria-hidden="true"
                />
                <div
                  className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-50"
                  role="listbox"
                  aria-label="Currency options"
                >
                  <p className="text-xs text-gray-400 mb-3 font-semibold">
                    SELECT CURRENCY
                  </p>

                  {CURRENCIES.map(({ code, flag, name }) => (
                    <div
                      key={code}
                      onClick={() => handleCurrencySelect(code)}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                      role="option"
                      aria-selected={currency === code}
                    >
                      <div>
                        <p className={`font-semibold ${code === "USD" ? "text-green-600" : ""}`}>
                          {flag} {code}
                        </p>
                        <p className="text-xs text-gray-400">{name}</p>
                      </div>
                      {currency === code && (
                        <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/help" prefetch={false}>Help</Link>
            <Link href="/sell" prefetch={false}>Sell on ServiceMart</Link>
            <button
              type="button"
              className="font-medium cursor-pointer"
              onClick={handleDownloadApp}
            >
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;


