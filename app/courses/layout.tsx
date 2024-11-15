import WelcomeBanner from '../components/WelcomeBanner';

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col mt-12">
      <div className="flex-1 bg-gradient-to-r from-amber-900/10 via-[#F15BB5]/10 to-[#00BBF9]/10 dark:from-[#9B5DE5]/5 dark:via-[#F15BB5]/5 dark:to-[#00BBF9]/5">
        <WelcomeBanner />
        <main className="container mx-auto px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
