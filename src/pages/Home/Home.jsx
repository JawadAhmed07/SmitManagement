import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="text-gray-600  body-font">
      <div className="container mx-auto bg-green-200 flex px-5 py-32 items-center justify-center flex-col">

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl font-mono text-3xl mb-4 font-extrabold text-gray-900">
            Saylani Management System
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
            ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
            meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
            fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <a href="login">
              <Button className="inline-flex  border-0 py-5 px-8 focus:outline-none rounded text-lg">
                Start Now
              </Button>

            </a>
            
          </div>
        </div>
      </div>
    </section>

  );
};
export default Home;