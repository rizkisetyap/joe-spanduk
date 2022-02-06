import type { NextPage } from 'next';
import Link from 'next/link';
import logo from 'components/images/printing.svg';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
const Home: NextPage = () => {
  console.log(logo);

  return (
    <div>
      <div className="px-4 border-b shadow-md">
        <div className="flex justify-between items-center py-4 max-w-5xl lg:mx-auto">
          <Link href="/">
            <a className="uppercase hover:underline">
              <h1 className="text-[18px] font-bold text-slate-900">
                Joe<span className="ml-1 text-indigo-600">Spanduk</span>
              </h1>
            </a>
          </Link>
          <nav className="hidden md:inline-flex md:space-x-4">
            <a className="no-underline text-slate-700" href="#">
              Home
            </a>
            <a className="no-underline text-slate-700" href="#">
              Tentang
            </a>
            <a className="no-underline text-slate-700" href="#">
              Harga
            </a>
            <a className="no-underline text-slate-700" href="#">
              Kontak
            </a>
          </nav>
          <div className="md:hidden p-2 rounded-md bg-slate-100 space-y-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-600 group">
            <span className="block w-7 h-[4px] bg-slate-900 rounded-sm group-hover:bg-slate-50 transition-colors duration-300 ease-linear" />
            <span className="block w-7 h-[4px] bg-slate-900 rounded-sm group-hover:bg-slate-50 transition-colors duration-300 ease-linear" />
            <span className="block w-7 h-[4px] bg-slate-900 rounded-sm group-hover:bg-slate-50 transition-colors duration-300 ease-linear" />
          </div>
        </div>
      </div>

      <Header />
      <main className="lg:max-w-5xl mx-auto bg-gray-100 pb-16">
        <section className="my-20">
          <h2 className="text-3xl font-medium mb-8">Jasa Pembuatan</h2>
          <article className="grid px-14 sm:max-w-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card image="/hero(1).jpeg" title="Spanduk" />
            <Card image="/banner.jpg" title="Banner" />
            <Card image="/Bendera.jpg" title="Bendera" />
            <Card image="/umbul.jpg" title="Umbul-umbul" />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
