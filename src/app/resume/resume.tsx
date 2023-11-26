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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">About me</h2>
            <p className="text-lg mb-4 font-bold text-yellow-300">
            Savvy Full-Stack Developer with a strong foundation in computer science and a recent graduate of Victoria University.
          I am passionate about technology, experienced in troubleshooting hardware and software issues in customer-focused environments.
          Proven expertise in operating systems, networking protocols, and technical support procedures.
          Seeking a dynamic role to apply and enhance my skills in a vibrant and innovative team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Skills and Experience</h2>
            <p className="text-lg">
              Proficient in various programming languages and frameworks, including HTML, CSS, JavaScript, React, NextJS, and Node.js.
              Skilled in identifying and resolving complex technical problems, with experience in deploying applications using Vercel, Netlify, and AWS.
              Committed to staying up-to-date with the latest industry trends and technologies.
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
