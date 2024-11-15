export default function WelcomeBanner() {
  return (
    <div className="container mx-auto px-6">
      <div className="py-6 border-b border-gray-200/80 dark:border-gray-700/80">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Welcome back,
            </p>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-[#9B5DE5] to-[#F15BB5] bg-clip-text text-transparent">
              Ankita
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Course Progress
              </p>
              <p className="text-lg font-semibold text-[#00BBF9]">
                4/12 completed
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9B5DE5] to-[#F15BB5] flex items-center justify-center text-white font-bold">
              AK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
