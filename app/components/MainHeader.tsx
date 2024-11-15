import Link from 'next/link';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800 z-50">
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/next.svg"
            alt="Logo"
            width={100}
            height={24}
            className="dark:invert"
          />
        </Link>

        <div className="flex gap-8">
          <Link
            href="/courses"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/courses/about"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
