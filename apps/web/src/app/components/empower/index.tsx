import { Container } from '../container';
import { ButtonComponent } from '../button';
import Image from 'next/image';

export function Empower() {
  return (
    <div className="bg-[#333333]">
      <Container>
        <div className="flex justify-between py-20">
          <div className="rounded-3xl w-[65%] bg-[#006BA6] flex justify-between">
            <div className="py-6 px-6">
              <div className="rounded-3xl bg-[#197aae] px-3.5 py-3 w-fit">
                <p className="text-white font-gothamM text-sm">
                  About Happy Woman
                </p>
              </div>
              <p className="font-gothamB text-[2.5rem] max-w-[19ch] text-white leading-[3rem] mt-5">
                Empowering Nigerian Women to{' '}
                <span className="text-[#002F51]">Thrive</span>
              </p>

              <p className="text-white font-gothamL max-w-[50ch] text-sm mt-3 leading-5">
                HappyWoman is a digital platform designed to uplift and support
                Nigerian women through access to financial resources,
                mentorship, business opportunities, and health services.
              </p>

              <ButtonComponent className="mt-[10rem] py-4">
                Join the Movement
              </ButtonComponent>
            </div>
            <div className="flex flex-col justify-end">
              <div className="relative w-[15.5rem] h-[28rem]">
                <Image
                  src={'/woman2.png'}
                  alt=""
                  fill
                  className="absolute rounded-br-3xl"
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="bg-[#FFBC42] w-[33%] rounded-3xl">
            <p className="font-gothamB py-5 px-6 text-[1.5rem] text-[#333333]">
              Mission Statement:
            </p>
            <p className='font-gothamL px-6 text-sm leading-5 text-sm -mt-2'>
              Our mission is to break barriers and create equal opportunities
              for women across Nigeria, regardless of their location or
              background. We believe that when women thrive, communities thrive.
            </p>

            <div className='relative w-[12rem] h-[28rem] -mt-20'>
              <Image src={'/woman2-hand.png'} alt='' fill className='absolute' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
