import Image from 'next/image';
import { Container } from '../container';
import { CapIcon } from './icons/capicon';
import { MegaPhone } from './icons/megaphone';
import { GymIcon } from './icons/gym';

export function WhyHappyWoman() {
  return (
    <div className="py-16">
      <div className="flex justify-center">
        <div className="bg-[#6767671A] rounded-3xl">
          <p className="text-[#5603AD] font-gothamB text-[1rem] px-5 py-2 text-sm">
            Benefits and Advantages
          </p>
        </div>
      </div>
      <p className="text-center font-gotham text-[2.5rem] mt-6">
        Why Choose Happy<span className="text-[#006BA6]">Woman?</span>
      </p>

      <Container>
        <div className="flex justify-between mt-16">
          <div className="w-[30%] bg-[#0496FF1A] px-6 py-10 rounded-2xl">
            <p className="font-gothamB text-black text-[1.2rem]">Supportive Community</p>
            <p className="mt-2 font-gothamM text-sm text-black">
              Connect with mentors and a community of like-minded women.
            </p>
            <div className="flex gap-3 mt-8">
              <div className="relative w-[6.5rem] h-[2rem]">
                <Image src={'/ladies.png'} alt="" fill className="absolute" />
              </div>
              <p className="text-[#E83F6F] font-gothamB mt-2 text-sm">
                Join Us
              </p>
            </div>
          </div>
          <div className="w-[68%] bg-[#006BA6] rounded-2xl px-8 flex justify-between">
            <div className="py-8">
              <div className="bg-[#E5F4FF4D] w-fit px-2 py-2 rounded-lg">
                <CapIcon />
              </div>

              <p className="text-white font-gothamB max-w-[20ch] text-[1.3rem] mt-2 leading-7">
                Unlock your potentials; learn new skills
              </p>
              <p className="font-gotham text-sm text-white max-w-[40ch] mt-4 leading-5">
                Take free and paid courses to advance your career or business.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="relative w-[14rem] h-[13rem]">
                <Image src={'/woman3.png'} alt="" fill className="absolute" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[68%] bg-[#0496FF1A] rounded-2xl px-8 flex justify-between">
            <div className="py-8">
              <div className="bg-[#006BA6] w-fit px-2 py-2 rounded-lg">
                <MegaPhone />
              </div>

              <p className="text-black font-gothamB max-w-[20ch] text-[1.3rem] mt-8 leading-7">
                Grow Your Business
              </p>
              <p className="font-gotham text-sm text-black max-w-[40ch] mt-4 leading-5">
                Access loans, grants, and a marketplace to reach more customers.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="relative w-[14rem] h-[13rem]">
                <Image src={'/woman4.png'} alt="" fill className="absolute" />
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-[#006BA6] px-6 py-8 rounded-2xl">
            <div className="bg-[#E5F4FF4D] w-fit px-2 py-2 rounded-lg">
              <GymIcon />
            </div>
            <p className="font-gothamB text-white mt-5 max-w-[20ch]">
              Stay Healthy: Access telemedicine and wellness resources.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
