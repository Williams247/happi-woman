'use client';
import { useRouter } from 'next/navigation';

const TermsAndConditions = ({ onClose, onAccept }: { onClose: () => void; onAccept: () => void }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg sm:max-w-lg max-h-[80vh] overflow-y-auto flex flex-col gap-y-4 px-6 py-8">
        <h2 className="lg:text-2xl text-lg font-bold">Terms & Conditions!</h2>

        <div className=" text-[#333333] md:text-[18px] text-base">
          <p className='py-1'>Pizza ipsum dolor meat lovers buffalo. Roll pan party steak pesto mozzarella NY broccoli buffalo. Chicken extra.</p>
          <p className='py-1'>
          Pizza ipsum dolor meat lovers buffalo. Roll pan party steak pesto,
          </p>
          <p className='py-1'>Pizza ipsum dolor meat lovers buffalo. Roll pan party steak pesto mozzarella NY broccoli buffalo. Chicken extra.</p>
        </div>
        <div className='flex gap-x-4 font-semibold'>
          <button
            onClick={onClose}
            className="border border-[#5603AD] py-2.5 px-5 font-gotham text-sm text-black rounded-lg w-full mt-3"
          >
            Decline
          </button>
          <button
          onClick={onAccept}
          className="bg-[#E83F6F] py-2.5 px-5 font-gotham text-sm text-white rounded-lg w-full mt-3"
        >
          Accept
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default TermsAndConditions;
