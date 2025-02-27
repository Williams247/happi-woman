
import { ButtonComponent } from '../button';

const TalkToUS = () => {
  return (

    <div className="min-hscreen bg-cover bg-center flex md:flex-row flex-col justify-between items-center bg-talktous bg-no-repeat md:px-20 md:py-12 p-10">
    <div>
      <h1 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
        Got any question / problems?
      </h1>
      <p className="text-[#F5F5F5] text-base py-4">
        You can talk to us by reaching out via our contacts
      </p>
    </div>

    <ButtonComponent className="text-sm px-10">Talk to us</ButtonComponent>
  </div>
  );
};

export default TalkToUS;
