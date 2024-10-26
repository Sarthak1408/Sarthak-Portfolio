import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
    return (
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/*text*/}
            <div className="text-center xl:text-left">
              <span className="text-xl">Software Developer </span>
              <h1 className="h1">
                Hello I'm<br/> <span className="text-accent">Sarthak Mathur</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">Loremdjvh sjhdvkjbskjbvkjsbjdhcvjshdvjhsvjhcvjkhsvjhvvgsev</p>
              {/*btn and social*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-x1"/>
                </Button>
                <div className="mb-8 xl:mb-0">socials</div>
              </div>
            </div>
            {/*photo*/}
            <div>photo</div>
          </div>
        </div>
      </section>
    )
}
export default Home
