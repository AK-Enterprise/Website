import Hero from "../components/Hero";
import Why from "../components/Why";
import Inspiration from "../components/Inspiration";
import New from "../components/New";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import FadeIn from "../components/FadeIn";
import TechnicalSupport from "../components/TechnicalSupport";
import Video from "../components/Video"
function Main() {
  return (
    <div>
      <Video></Video>
      <Hero></Hero>
      <FadeIn>
        <Why></Why>
      </FadeIn>
      <Inspiration></Inspiration>
      <New></New>
      <TechnicalSupport></TechnicalSupport>
      <Team></Team>
      <Clients></Clients>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Main;

