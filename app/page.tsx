import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-73px)] flex flex-col">
      <div className="flex-1 flex items-center relative overflow-hidden bg-gradient-to-r from-amber-50 to-purple-200  dark:from-gray-900 dark:to-black pt-16">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]" />

        <main className="relative max-w-5xl mx-auto px-6 py-24 text-center sm:py-32">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-8">
            Master Next.js Development
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of developers learning to build modern web
            applications with Next.js and React
          </p>

          <div className="flex gap-6 justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 bg-[#9B5DE5] text-white rounded-xl font-medium hover:bg-[#F15BB5] transition-colors shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Browse Courses
            </Link>
          </div>

          <div className="mt-16 flex gap-8 justify-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                1000+
              </span>
              Students
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                50+
              </span>
              Courses
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                4.9
              </span>
              Average Rating
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
