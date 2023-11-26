// pages/index.tsx

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 p-20">
      <Head>
        <title>Sunil Paudel - Full-Stack Developer</title>
        <meta name="description" content="Passionate full-stack developer actively seeking new opportunities." />
      </Head>

      <header className="mb-4">
        <div className="flex items-center justify-center">
          <Image
            src="/your-photo.jpg"
            alt="Your Photo"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-4xl font-bold text-white">Sunil Paudel</h1>
            <p className="text-lg text-white">Age: 26</p>
            <p className="text-lg text-white">Address: 5 Elva Street, Sydney, NSW, Australia</p>
            <p className="text-lg text-white">Hobbies: Coding, Swimming, Football</p>
          </div>
        </div>
      </header>

      <main className="text-white text-center">
        <p className="text-lg mb-4 font-bold text-yellow-300">
          Savvy expert experienced in troubleshooting computer hardware and software issues in customer-focused environments.
          Proven comprehensive knowledge of operating systems, networking protocols, and technical support procedures.
          Skilled in identifying and resolving complex technical problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to my personal website!</h2>
            <p className="text-lg">
              My name is Sunil Paudel, and I am a recent graduate of Victoria University, where I earned a degree in Computer Science.
              I am passionate about technology and software development who has completed some projects like{' '}
              <Link href="https://superrchatbot.vercel.app" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                personal assistant chatbot
              </Link>
              , seeking a full-stack developer position to further develop my skills
              and contribute to innovative projects.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Skills and Experience</h2>
            <p className="text-lg">
              As a full-stack developer, I am proficient in various programming languages and frameworks, including HTML, CSS, JavaScript, React, NextJS, and Node.js along with deployment techniques like Vercel, Netlify, and AWS.
              I am also experienced in working with databases and cloud platforms. In my free time, I enjoy exploring new technologies and staying
              up-to-date with the latest trends in the tech industry (like learning from FreeCodeCamp and getting certified for responsive web designing, watching many YouTube videos, attending coding bootcamps, etc).
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
