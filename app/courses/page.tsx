export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto pt-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-pink-500">
        Available Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((course) => (
          <div
            key={course}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video bg-gradient-to-br from-[#9B5DE5]  to-[#00BBF9] relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">
                N
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#9B5DE5]/10 text-[#9B5DE5] dark:bg-[#9B5DE5]/20 dark:text-[#F15BB5] text-xs font-medium rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-900 text-[#00BBF9] dark:bg-[#00BBF9]/20 dark:text-[#00F5D4] text-xs font-medium rounded-full">
                  8 hours
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-[#9B5DE5] dark:group-hover:text-[#F15BB5] transition-colors">
                Advanced Next.js Course {course}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                Master Next.js features including App Router, Server Components,
                and API Routes.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
