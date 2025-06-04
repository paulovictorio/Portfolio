import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
    </footer>
  );
}
