import homeImg from '../../public/home.jpg'
import { Hero } from "@/components/hero";



export default function Home() {
  return (
    <Hero imageData={homeImg} altText={'car factory'} heading={'Professional Home Page'}/>
  );
}
