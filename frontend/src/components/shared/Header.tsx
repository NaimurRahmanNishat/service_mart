// // src/components/shared/Header.tsx
// import Link from "next/link";
// import HeaderTop from "./HeaderTop";
// import { FaRegUser, FaSearch } from "react-icons/fa";

// const Header = () => {
//   return (
//     <>
//       {/* header top */}
//       <HeaderTop />

//       {/* header */}
//       <header className="max-w-7xl w-full mx-auto px-4 md:px-0 py-2 md:py-4 flex justify-between gap-2">
//         {/* left section */}
//         <Link href="/" className="flex items-center gap-1">
//           <p className="px-2 py-1 bg-slate-700 text-white rounded-sm">SM</p>
//           <p className="text-2xl font-bold font-oswald hidden md:flex">
//             Service<span className="text-green-600">Mart</span>
//           </p>
//         </Link>

//         {/* middle section */}
//         <div className="hidden md:flex items-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="px-4 w-120 py-2 border-l-2 border-t-2 border-b-2 border-gray-500 rounded-l-md flex-1 outline-none"
//           />
//           <button className="flex items-center gap-2 border-2 rounded-r-md px-4 py-2 -mx-1 text-white bg-slate-900 border-slate-900 cursor-pointer">
//             <FaSearch />
//             Search
//           </button>
//         </div>

//         {/* right section */}
//         <div className="flex items-center justify-between gap-6">
//           <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-sm cursor-pointer hidden md:flex">
//             Get Best Price
//           </button>
//           <div className="flex items-center gap-1 cursor-pointer">
//             <FaRegUser size={24} className="hover:text-gray-600" />
//             <p className="font-medium text-xl text-slate-700">Sign In</p>
//           </div>
//         </div>
//       </header>

//       {/* header bottom */}
//       <div></div>
//     </>
//   );
// };

// export default Header;



// src/components/shared/Header.tsx
import Link from "next/link";
import HeaderTop from "./HeaderTop";
import { FaRegUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* header top */}
      <HeaderTop />

      {/* header */}
      <header className="max-w-7xl w-full mx-auto px-4 md:px-0 py-2 md:py-4 flex justify-between gap-2">
        {/* left section — Logo */}
        <Link
          href="/"
          className="flex items-center gap-1"
          prefetch={false}
        >
          <p className="px-2 py-1 bg-slate-700 text-white rounded-sm">SM</p>
          <p className="text-2xl font-bold font-oswald hidden md:flex">
            Service<span className="text-green-600">Mart</span>
          </p>
        </Link>

        {/* middle section — Search */}
        <div className="hidden md:flex items-center">
          <input
            type="search" 
            placeholder="Search products..."
            className="px-4 w-120 py-2 border-l-2 border-t-2 border-b-2 border-gray-500 rounded-l-md flex-1 outline-none"
            autoComplete="off"
          />
          <button
            type="submit"
            className="flex items-center gap-2 border-2 rounded-r-md px-4 py-2 -mx-1 text-white bg-slate-900 border-slate-900 cursor-pointer"
            aria-label="Search"
          >
            <FaSearch aria-hidden="true" />
            Search
          </button>
        </div>

        {/* right section */}
        <div className="flex items-center justify-between gap-6">
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white font-medium rounded-sm cursor-pointer hidden md:flex"
          >
            Get Best Price
          </button>
          <Link href="/login" className="flex items-center gap-1 cursor-pointer">
            <FaRegUser size={24} className="hover:text-gray-600" aria-hidden="true" />
            <p className="font-medium text-xl text-slate-700">Sign In</p>
          </Link>
        </div>
      </header>

      {/* header bottom */}
      <div></div>
    </>
  );
};

export default Header;