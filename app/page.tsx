import { BikeCard, CustomFilter, Hero, SearchBar } from "@/components";
import { allBikes } from "@/constants";
import Image from "next/image";

export default function Home() {
  console.log(allBikes);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Katalog Motor</h1>
          <p>Temukan motor yang sesuai dengan kebutuhanmu.</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="type" />
            {/* <CustomFilter title="fuel" /> */}
          </div>
        </div>

        <section>
          <div className="home__cars-wrapper">
            {allBikes?.map((bike, i) => (
              <BikeCard key={i} bike={bike} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
