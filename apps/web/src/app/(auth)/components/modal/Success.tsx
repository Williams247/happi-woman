'use client';
import { useRouter } from 'next/navigation';

const Success = () => {
  const router = useRouter()
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg text-center sm:max-w-lg max-h-[80vh] overflow-y-auto flex flex-col gap-y-4 p-[4rem]">
        <h2 className="lg:text-2xl text-lg font-bold">Successful!</h2>

        <div className=" text-[#333333] md:text-[18px] text-base">
          <p>Your account has been created.</p>
          <p>
            You will be contacted via email for the <br /> next step
          </p>
        </div>

        <button
          onClick={()=>router.push('/')}
          className="bg-[#E83F6F] py-2.5 px-5 font-gotham text-sm text-white rounded-lg w-full mt-3"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Success;
