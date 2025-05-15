// pages/mission.tsx
import Head from "next/head";
import "@/app/styles/help.css";
import Image from "next/image";

export default function MissionPage() {
  return (
    <>
      <Head>
        <title>Our Mission | [Your Platform Name]</title>
        <meta
          name="description"
          content="Our mission is to fight e-waste by giving tech a second life. Learn how our non-profit platform supports a circular economy and keeps hazardous materials out of landfills."
        />
      </Head>
      <main className="help-page">
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>

        <section className="twoColumn">
          <div className="illustration md:order-2">
            <Image src="/eWaste.svg" width={360} height={360} alt="eWaste" />
          </div>
          <div className="text md:order-1">
            <h2 className="text-2xl font-semibold mb-4">
              Preventing Hazardous Waste
            </h2>
            <p>
              Every year, millions of phones, laptops, and smartwatches are
              thrown away— many still functional.
            </p>
            <p>
              When trashed, these devices release toxic substances like
              <strong> lead, mercury, cadmium, and lithium</strong> into the
              environment.
            </p>
            <p>
              A single smartphone can contain up to{" "}
              <strong>900 mg of mercury</strong> and
              <strong> 15-20 grams of plastic</strong>.
            </p>
            <p>
              Once these devices reach landfills, those materials leak into soil
              and water systems, harming ecosystems and public health.
            </p>
          </div>
        </section>

        <section className="quote">
          <p>
            By enabling users to trade their tech instead of trashing it, our
            platform helps prevent these harmful materials from entering the
            waste stream. <br />
            —and gives devices a meaningful second life.
          </p>
        </section>

        <section className="twoColumn">
          <div className="illustration">
            <Image
              src="/circularEconomy.png"
              width={360}
              height={360}
              alt="Circular Economy"
            />
          </div>
          <div className="text">
            <h2 className="text-2xl font-semibold mb-4">
              Powering the Circular Economy
            </h2>
            <p className="mb-4">
              Most electronics still work—or can be repaired—when discarded.
              We&apos;re here to change how people think about tech ownership.
              Instead of linear &apos;buy, use, discard&apos; patterns, we
              support a circular model: one where devices are reused,
              repurposed, and reloved.
            </p>
            <p>
              Every trade on our platform keeps valuable resources like
              <strong> rare earth metals, glass, and plastics</strong> in use,
              reducing the need for extraction and new manufacturing. This not
              only prevents pollution but reduces the carbon footprint of
              consumer tech.
            </p>
          </div>
        </section>

        <section className="quote">
          <p>
            Our platform is built to serve a mission—not a margin.
            <br /> That means no commissions, no upsells, and no tracking for ad
            revenue.
          </p>
        </section>

        <section className="twoColumn">
          <div className="illustration md:order-2">
            <Image
              src="/happyPlanet.svg"
              width={360}
              height={360}
              alt="Circular Economy"
            />
          </div>
          <div className="text md:order-1">
            <h2 className="text-2xl font-semibold mb-4">
              A Non-Profit for the Planet
            </h2>
            <p>
              <strong>
                We&apos;re not in this for profit. our focus on impact.
              </strong>
            </p>
            <p>
              Every listing you post and every item you trade is a step toward a
              cleaner, more sustainable world. We transparently track how much
              e-waste our users have prevented —measured in kilograms of
              diverted material and grams of toxic substances saved from
              landfills.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p>
            Whether you&apos;re clearing out an old gadget drawer or looking for
            your next affordable device, you&apos;re part of the solution.
            Together, we can redefine tech ownership and protect the planet—one
            trade at a time.
          </p>
        </section>
      </main>
    </>
  );
}
