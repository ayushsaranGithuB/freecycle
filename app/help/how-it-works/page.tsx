// pages/How-It-Works.tsx
import "@/app/styles/help.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// metadata
export const metadata = {
  title: "How it Works | Freecycle",
  description:
    "Our mission is to fight e-waste by giving tech a second life. Learn how our non-profit platform supports a circular economy and keeps hazardous materials out of landfills.",
};

export default function MissionPage() {
  return (
    <>
      <main className="help-page">
        <h1 className="text-4xl font-bold mb-6">How It Works</h1>
        <ul className="how-it-works-steps">
          <li>
            <Image
              src="/illustrations/hiw-1.png"
              alt="List your unused tech devices"
              width={135}
              height={150}
            />
            <div>
              <h2>1. List your un-used tech devices</h2>
              <p>
                We collect information about the device you want to trade,
                including its condition and any accessories included.
              </p>
              <p>
                This helps us determine its value and find the right match for
                you.
              </p>
            </div>
          </li>

          <li>
            <Image
              src="/illustrations/hiw-2.png"
              alt="Find a match"
              width={150}
              height={130}
            />
            <div>
              <h2>2. Find a match</h2>
              <p>
                Our platform matches you with someone who can use your device.
              </p>
              <p>
                <strong>
                  The Buyer pays ONLY for shipping and NO OTHER FEES or
                  COMISSIONS.
                </strong>
              </p>
              <p>
                Shipping costs are provided by a third-party and determined
                based on the item size and weight and the distance between you
                and the recipient.
              </p>
            </div>
          </li>
          <li>
            <Image
              src="/illustrations/hiw-3.png"
              alt="Ship your device"
              width={150}
              height={105}
            />
            <div>
              <h2>3. Ship your device</h2>
              <p>
                We provide a prepaid shipping label to make the process easy and
                convenient for the seller.
              </p>
              <p>
                Simply print the label, pack your device, and mark it ready for
                pickup.
              </p>
              <p>Our shipping partner will handle the rest.</p>
            </div>
          </li>
          <li>
            <Image
              src="/illustrations/hiw-4.png"
              alt="Get points"
              width={150}
              height={135}
            />
            <div>
              <h2>4. Get points</h2>
              <p>
                Once the device is received, you will receive points that can be
                used to purchase other devices on our platform.
              </p>
              <p>
                The points are based on the condition and value of the device
                you traded.
              </p>
            </div>
          </li>
        </ul>

        <hr className="mt-8 mb-12 border-t border-gray-200" />

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
          <ul className="mb-4 flex flex-col  md:flex-row  justify-between mt-8">
            <li>
              <Button variant="outline" className="mb-4">
                <Link href={"/auth/sign-up"} className="text-lg">
                  Sign-Up for an Account
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" className="mb-4">
                <Link href={"/listings"} className="text-lg">
                  Explore the Marketplace
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" className="mb-4">
                <Link href={"/list-item"} className="text-lg">
                  List a Gadget for Sale
                </Link>
              </Button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
