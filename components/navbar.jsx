import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-600 py-4 px-6 sticky top-0 z-50">
      <div className="flex justify-end gap-8">
        <Link href="#formacao">
          <button className="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Formação
          </button>
        </Link>
        <Link href="#contato">
          <button className="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Contato
          </button>
        </Link>
        <Link href="#sobre">
          <button className="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Sobre Mim
          </button>
        </Link>
      </div>
    </nav>
  );
}
