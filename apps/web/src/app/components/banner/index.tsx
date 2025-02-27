import { Container } from '../container';
import { Navigation } from '../navigation';

export function Banner() {
  return (
    <div className="bg-[lightblue] w-full h-screen">
      <Container>
        <Navigation />
        <div className="flex justify-center mt-6">
          <div>
            <div className="bg-[#6767671A] text-[#5603AD] rounded-3xl px-3 py-2.5 font-gothamB text-sm w-fit mx-auto">
              Platform for Women Empowerment
            </div>
            <p className="font-gothamB text-[4.5rem] text-center max-w-[20ch] leading-[5rem] mt-3.5">
              Empowering Nigerian Women to <span className='text-[#006BA6]'>Thrive</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
