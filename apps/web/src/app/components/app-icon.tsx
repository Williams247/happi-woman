import Image from 'next/image';

export function AppIcon() {
  return (
    <div className="relative w-[5rem] h-[2.5rem]">
      <Image
        src={
          'https://files.skillpaddy.com/public/image/happiwomanlogo-1740571628332.png'
        }
        alt=""
        fill
        className="absolute"
      />
    </div>
  );
}
