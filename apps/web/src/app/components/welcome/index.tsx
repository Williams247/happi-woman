import { Container } from '../container';
import { VideoPlayer } from './video';

export function Welcome() {
  return (
    <div>
      <Container className="my-20">
        <div className="flex justify-between">
          <div className="w-[48%]">
            <VideoPlayer />
          </div>
          <div className="w-[48%]">
            <p className="font-gothamB text-[3rem] max-w-[10ch] leading-[3.5rem] text-[#333333] mt-5">
              Welcome Message <span className="text-[#006BA6]">from</span>
            </p>
            <p className="font-gothamB text-[2.3rem] mt-8">
              H.E. Imaan Sulaiman-Ibrahim
            </p>
            <p className="font-gothamM text-[1rem] mt-2 text-[#8E8E8E]">
              The Honorable Minister for Women Affairs
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
