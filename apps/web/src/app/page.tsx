import { Banner } from './components/banner';
import { Sponsors } from './components/sponsors';
import { Welcome } from './components/welcome';
import { Empower } from './components/empower';
import { WhyHappyWoman } from './components/whyhappywoman';
import Footer from './components/footer';
import TalkToUS from './components/talk-to-us';

function Page() {
  return (
    <div className="bg-white">
      <Banner />
      <Sponsors />
      <Welcome />
      <Empower />
      <WhyHappyWoman />
      <TalkToUS/>
      <Footer/>
    </div>
  );
}

export default Page;
