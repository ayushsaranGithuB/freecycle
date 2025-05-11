// pages/mission.tsx
import Head from "next/head";

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
      <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Preventing Hazardous Waste
          </h2>
          <p className="mb-4">
            Every year, millions of phones, laptops, and smartwatches are thrown
            away— many still functional. When trashed, these devices release
            toxic substances like
            <strong> lead, mercury, cadmium, and lithium</strong> into the
            environment. A single smartphone can contain up to{" "}
            <strong>900 mg of mercury</strong> and
            <strong> 15-20 grams of plastic</strong>. Once these devices reach
            landfills, those materials leak into soil and water systems, harming
            ecosystems and public health.
          </p>
          <p>
            By enabling users to trade their tech instead of trashing it, our
            platform helps prevent these harmful materials from entering the
            waste stream—and gives devices a meaningful second life.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Powering the Circular Economy
          </h2>
          <p className="mb-4">
            Most electronics still work—or can be repaired—when discarded. We&apos;re
            here to change how people think about tech ownership. Instead of
            linear &apos;buy, use, discard&apos; patterns, we support a circular model:
            one where devices are reused, repurposed, and reloved.
          </p>
          <p>
            Every trade on our platform keeps valuable resources like
            <strong> rare earth metals, glass, and plastics</strong> in use,
            reducing the need for extraction and new manufacturing. This not
            only prevents pollution but reduces the carbon footprint of consumer
            tech.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            A Non-Profit for the Planet
          </h2>
          <p className="mb-4">
            We&apos;re not in this for profit. Our platform is built to serve a
            mission—not a margin. That means no commissions, no upsells, and no
            tracking for ad revenue.
          </p>
          <p>
            Instead, we focus on impact. Every listing you post and every item
            you trade is a step toward a cleaner, more sustainable world. We
            transparently track how much{" "}
            <strong>e-waste our users have prevented</strong>—measured in
            kilograms of diverted material and grams of toxic substances saved
            from landfills.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p>
            Whether you&apos;re clearing out an old gadget drawer or looking for your
            next affordable device, you&apos;re part of the solution. Together, we
            can redefine tech ownership and protect the planet—one trade at a
            time.
          </p>
        </section>
      </main>
    </>
  );
}
