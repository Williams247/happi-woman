import { Container } from './components/container'
import { ButtonComponent } from './components/button'

function Page() {
  return (
    <div className="bg-white">
     <Container>
      <ButtonComponent>Button component</ButtonComponent>
     </Container>
    </div>
  );
}

export default Page;
