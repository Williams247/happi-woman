import { Banner } from './components/banner';
import { Sponsors } from './components/sponsors';
import { Welcome } from './components/welcome';
import { Empower } from './components/empower';
import { WhyHappyWoman } from './components/whyhappywoman';

function Page() {
  return (
    <div className="bg-white">
      <Banner />
      <Sponsors />
      <Welcome />
      <Empower />
      <WhyHappyWoman />
    </div>
  );
}

export default Page;
