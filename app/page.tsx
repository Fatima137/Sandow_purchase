import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, Search, Shield, Eye, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 border-b-2 border-black">
        <Link href="/" className="flex flex-col">
          <span className="text-3xl font-bold tracking-tight">SANDOW</span>
          <span className="text-xs tracking-widest text-gray-600">CONVEYANCING</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="tel:1800BUYSELL"
            className="hidden md:flex items-center gap-2 bg-yellow-400 px-5 py-2 font-semibold text-black border-2 border-black hover:bg-yellow-500 transition"
          >
            <Phone size={16} />
            1800 BUY SELL
          </Link>
          <button className="p-2 border-2 border-black hover:bg-gray-100">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white flex flex-col justify-center items-center text-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Stress-Free Conveyancing
          </h1>
          <p className="text-lg mb-8 max-w-2xl">
            Smooth property buying experience with trusted professionals by your side.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="https://form.jotform.com/251135998927068"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-bold py-3 px-6 border-2 border-black hover:bg-yellow-500 transition"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="bg-white text-black font-bold py-3 px-6 border-2 border-black hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full py-4 pl-6 pr-16 border-b-2 border-black focus:outline-none text-lg"
          />
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600">
            <Search size={24} />
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container mx-auto grid md:grid-cols-2 gap-6 px-6 py-12">
        {/* Why Choose Us */}
        <div className="flex flex-col p-8 bg-white border-2 border-black space-y-6">
          <div className="w-full h-64 relative border-2 border-black">
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Why Choose Us"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-gray-700">
            We provide unparalleled expertise, personalized service, and a stress-free process tailored to your needs.
          </p>
        </div>

        {/* How It Works */}
        <div className="flex flex-col p-8 bg-blue-100 border-2 border-black space-y-6">
          <div className="w-full h-64 relative border-2 border-black">
            <Image
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
              alt="How It Works"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-700">
            From consultation to settlement, we guide you every step of the way for a seamless property transaction.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto grid md:grid-cols-3 gap-6 px-6 py-12">
        {/* Secure */}
        <div className="flex flex-col justify-center items-center text-center p-8 bg-gray-200 border-2 border-black">
          <Shield size={40} className="mb-4 text-blue-600" />
          <h3 className="text-xl font-bold mb-2">Secure</h3>
          <p className="text-gray-600">Your information and transactions are fully protected.</p>
        </div>

        {/* Transparent */}
        <div className="flex flex-col justify-center items-center text-center p-8 bg-blue-100 border-2 border-black">
          <Eye size={40} className="mb-4 text-blue-600" />
          <h3 className="text-xl font-bold mb-2">Transparent</h3>
          <p className="text-gray-600">Full visibility and open communication at every stage.</p>
        </div>

        {/* Fast */}
        <div className="flex flex-col justify-center items-center text-center p-8 bg-blue-600 text-white border-2 border-black">
          <Clock size={40} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Fast</h3>
          <p>We work quickly and efficiently to save your time and effort.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t-2 border-black text-gray-600 text-sm">
        © 2025 Sandow Conveyancing. All rights reserved.
      </footer>
    </div>
  );
}
