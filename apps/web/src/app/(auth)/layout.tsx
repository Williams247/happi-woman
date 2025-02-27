import Image from 'next/image';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex w-full min-h-screen bg-bg bg-no-repeat bg-cover bg-center items-center justify-center p-8">
      <div className="w-full md:max-w-full flex md:flex-row flex-col bg-white shadow-lg rounded-xl overflow-hidden min-h-[90vh]">

        <div className="w-full md:w-1/2 flex flex-col justify-between md:px-12 px-6 py-8">
          <main className="flex-grow">{children}</main>

          <div className="flex gap-x-3 justify-center items-center md:mt-0 mt-10">
            <Image src="/fmwa.png" height={40} width={40} alt="fmwa-logo" />
            <div className="text-sm">
              <p className="py-1">Powered by</p>
              <p className="font-bold text-[#333333]">
                The Ministry of Women Affairs.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative my-2 mr-2 rounded-lg">
          <Image
            src="/bg.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            width={500}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-white/10 to-transparent rounded-tr-xl rounded-br-xl"></div>

          <div className="relative z-10 p-8 text-black flex flex-col h-full">
            <div className="flex-grow">
              <p className="text-sm mb-2">———<span className='ml-2'>A wise quote</span></p>
            </div>
            <div className="mt-auto">
              <h2 className="text-3xl font-bold text-[#333333]">
                Get <br /> everything <br /> you want
              </h2>
              <p className="text-sm mt-3">
                Fill up your details to get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
