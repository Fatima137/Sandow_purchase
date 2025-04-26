import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header (With Black Bottom Border) */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b-2 border-black">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">SANDOW</span>
              <span className="text-xs tracking-widest text-gray-600">CONVEYANCING</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="tel:1800BUYSELL"
            className="hidden md:flex items-center gap-2 bg-yellow-400 px-6 py-3 font-bold text-black border-2 border-black"
          >
            <Phone size={16} />
            1800 BUY SELL
          </Link>
          <button className="p-2 border-2 border-black">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section (Overlapping Image + Blue Background) */}
        <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 py-12">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight border-b-2 border-black pb-4">
              Stress-Free Conveyancing for Every Property Buyer
            </h1>

            <p className="text-gray-600 text-lg border-b-2 border-black pb-6">
              From search to settlement and beyond, our skilled professionals ensure investors enjoy a smoother journey to property investment success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://form.jotform.com/251135998927068"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold py-3 px-6 text-center border-2 border-black hover:bg-yellow-500 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="#" 
                className="bg-gray-100 text-gray-700 font-bold py-3 px-6 text-center border-2 border-black hover:bg-gray-200 transition-colors"
              >
                Download Our Guide
              </Link>
            </div>
          </div>

          {/* Right Side (Blue Background + Overlapping Image) */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-blue-600 -right-4 md:-right-12 border-2 border-black"></div>
            <div className="absolute inset-0 -right-8 -bottom-8 border-2 border-black">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center border-2 border-black">
                <span className="text-gray-500">Property Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar (Black Underline) */}
        <section className="container mx-auto px-4 py-8 border-b-2 border-black">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 px-4 border-b-2 border-black focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-4">
              <Search className="text-gray-500" />
            </button>
          </div>
        </section>

        {/* 3-Column Grid (With Black Borders) */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-black">
          <div className="bg-gray-900 h-64 border-r-2 border-black"></div>
          <div className="bg-blue-100 h-64 border-r-2 border-black"></div>
          <div className="bg-blue-600 h-64"></div>
        </section>

        {/* 2-Column Grid (With Black Borders) */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-200 h-96 border-r-2 border-black"></div>
          <div className="bg-blue-100 h-96"></div>
        </section>
      </main>
    </div>
  )
}