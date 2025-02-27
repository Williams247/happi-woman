import { Banner } from './components/banner';
import { Sponsors } from './components/sponsors';
import { Welcome } from './components/welcome';
import { Empower } from './components/empower';
import { WhyHappyWoman } from './components/whyhappywoman';
import Footer from './components/footer';
import TalkToUS from './components/talk-to-us';
import UserStories from './components/user-stories';

function Page() {
  return (
    <div className="bg-white">
      <Banner />
      <Sponsors />
      <Welcome />
      <Empower />
      <WhyHappyWoman />
      <UserStories/>
      <TalkToUS/>
      <Footer/>
    </div>
  );
}

export default Page;
