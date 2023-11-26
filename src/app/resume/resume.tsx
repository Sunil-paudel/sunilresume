// pages/index.tsx

import Image from 'next/image';
import Link from 'next/link';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 p-20">
      <header className="mb-4">
        <h1 className="text-4xl font-bold text-white">Sunil Paudel</h1>
      </header>

      <main className="text-white text-center">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/your-photo.jpg"
            alt="Your Photo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <p className="text-lg mb-4 font-bold text-yellow-300">
          I am a passionate full-stack developer actively seeking new opportunities. Let's build something amazing together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to my personal website!</h2>
            <p className="text-lg">
              My name is Sunil Paudel, and I am a recent graduate of Victoria University, where I earned a degree in Computer Science.
              I am passionate about technology and software development, seeking a full-stack developer position to further develop my skills
              and contribute to innovative projects.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Skills and Experience</h2>
            <p className="text-lg">
              As a full-stack developer, I am proficient in various programming languages and frameworks, including HTML, CSS, JavaScript, React,NextJS,and Node.js along with deployment technique like in vercel, netify and aws.
              I am also experienced in working with databases and cloud platforms. In my free time, I enjoy exploring new technologies and staying
              up-to-date with the latest trends in the tech industry(like learning from freecode code camo and got certified, watched many youtube videos etc, attend coding bootcamp).
            </p>
          </div>
        </div>

        <div className="mt-8">
          {/* Contact via Phone */}
          <div className="mb-4">
            <Link href="tel:0413177566" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
              Contact via Phone
            </Link>
          </div>

          {/* Contact via Email */}
          <div className="mb-4">
            <Link href="mailto:paudelsunil16@gmail.com" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
              Contact via Email
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-white">
        <p>&copy; 2023 Sunil Paudel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
