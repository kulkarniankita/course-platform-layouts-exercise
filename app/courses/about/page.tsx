export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto pt-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Ankita</h1>
        <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Full Stack Developer & Educator
          </h2>

          <p className="text-gray-600">
            Hi, I&apos;m Ankita! I&apos;m a passionate full-stack developer and
            educator with expertise in modern web technologies. With several
            years of experience in the tech industry, I specialize in creating
            robust web applications and sharing my knowledge with others.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills & Expertise</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Frontend Development (React, Next.js, TypeScript)</li>
              <li>Backend Development (Node.js, Express, MongoDB)</li>
              <li>Cloud Services (AWS, Firebase)</li>
              <li>Technical Education and Mentoring</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Master&apos;s in Computer Science</li>
              <li>Bachelor&apos;s in Information Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
