import { Container } from '../container';
import Image from 'next/image';

export function Sponsors() {
  return (
    <div className="bg-[#333333] py-10">
      <Container>
        <div className="flex overflow-x-auto whitespace-nowrap">
          <p className="text-white font-gotham mt-2 flex-shrink-0">
            Trusted by many and
            <br /> thousands of women
          </p>

          <div className="relative w-[4rem] h-[4rem] flex-shrink-0 ml-28">
            <Image
              src={
                'https://files.skillpaddy.com/public/image/coat-of-arm-1740576420414.png'
              }
              fill
              alt=""
              className="absolute"
            />
          </div>

          <div className="relative w-[12rem] h-[2rem] ml-14 mt-4 flex-shrink-0">
            <Image
              src={
                'https://files.skillpaddy.com/public/image/flutterwave-logo-1740577042858.png'
              }
              fill
              alt=""
              className="absolute"
            />
          </div>

          <div className="relative w-[9rem] h-[1.8rem] ml-14 mt-4 flex-shrink-0">
            <Image
              src={'/intelligentinnovationsbrandandlogo.png'}
              fill
              alt=""
              className="absolute"
            />
          </div>

          <div className="relative w-[8rem] h-[1.5rem] ml-14 mt-4 flex-shrink-0">
            <Image src={'/gigalayer.png'} fill alt="" className="absolute" />
          </div>

          <div className="relative w-[3.8rem] h-[1.8rem] ml-14 mt-4 flex-shrink-0">
            <Image src={'/pigi.png'} fill alt="" className="absolute" />
          </div>
        </div>
      </Container>
    </div>
  );
}
