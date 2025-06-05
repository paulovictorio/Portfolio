import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-600 py-4 px-6 sticky top-0 z-50">
     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex justify-end gap-8">
        <Link
          href="/formacao"
          className="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Formação e Projetos
        </Link>
        <Link
          href="/#sobre"
          className="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Sobre Mim
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-begining gap-4 text-sm">
          <a
            href="https://github.com/paulovictorio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition-colors"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
  
          <p>Email: paulocesar940@gmail.com</p>
  
          <p>Celular: (15) 99131-2822</p>
      </div>
     </div>
    </nav>
    
  );
}
