import React from "react";

const SponsorLogo = [
  { id: 1, logo: "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" },
  {
    id: 2,
    logo: "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
  },
  { id: 3, logo: "https://s.udemycdn.com/partner-logos/v4/box-dark.svg" },
  { id: 4, logo: "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" },
  {
    id: 5,
    logo: "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
  },
  { id: 6, logo: "https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg" },
];

const Sponsor = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center my-8 md:my-12 py-8 bg-slate-100">
        {/* main div  */}
        <div className="container flex justify-center items-center flex-col px-2 md:px-0">
          {/* title and body   */}
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl md:3xl font-serif font-bold">
              Trusted by the best
            </h1>
            <p className="text-md">
              Leading companies use the same courses to help employees keep
              their skills fresh.
            </p>
          </div>
          {/* sponsor logo div  */}
          <div className="w-full my-8">
            <ul className="w-full flex justify-around items-center flex-wrap">
              {SponsorLogo.map(({ id, logo }) => (
                <>
                  <li key={id}>
                    <img src={logo} alt="sponsor-logo" />
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;
