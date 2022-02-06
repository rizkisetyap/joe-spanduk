import type { NextPage } from 'next';
import Link from 'next/link';
import { useContext } from 'react';
import { UIContext } from 'context/UIContext';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import cn from 'classnames';
const Home: NextPage = () => {
  const { mobileMenu, dispatch } = useContext(UIContext);

  return (
    <div
      className={cn({
        'max-h-[90vh] overflow-hidden': mobileMenu.isOpen,
      })}
    >
      <div className="px-4 sticky top-0 z-[9999] bg-white border-b shadow-md">
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
          <div
            onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            className="md:hidden p-2 rounded-md bg-slate-100 space-y-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-600 group"
          >
            <span className="block w-7 h-[4px] bg-slate-900 rounded-sm group-hover:bg-slate-50 transition-colors duration-300 ease-linear" />
            <span className="block w-7 h-[4px] bg-slate-900 rounded-sm group-hover:bg-slate-50 transition-colors duration-300 ease-linear" />
            <span className="block w-7 h-[4px] bg-slate-900 rounded-sm group-hover:bg-slate-50 transition-colors duration-300 ease-linear" />
          </div>
        </div>
      </div>

      <Header />
      <main className="lg:max-w-5xl mx-auto bg-gray-100 pb-16">
        <section className="my-20">
          <h2 className="text-3xl px-14 md:px-8 lg:px-0 font-medium mb-8">
            Jasa Pembuatan
          </h2>
          <article className="grid px-14  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card image="/hero(1).jpeg" title="Spanduk" />
            <Card image="/banner.jpg" title="Banner" />
            <Card image="/Bendera.jpg" title="Bendera" />
            <Card image="/umbul.jpg" title="Umbul-umbul" />
          </article>
        </section>
      </main>
      <div
        className={cn(
          'md:hidden fixed top-0 -left-0 w-full pt-[90px] sm:w-2/3 h-full z-30 bg-white overflow-hidden transition-transform duration-500 ease-in-out',
          {
            'left-0 translate-x-0': mobileMenu.isOpen,
            '-translate-x-full': !mobileMenu.isOpen,
          }
        )}
      >
        <nav className="flex flex-col gap-4 text-lg items-center md:hidden md:space-x-0">
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
      </div>
    </div>
  );
};

export default Home;
