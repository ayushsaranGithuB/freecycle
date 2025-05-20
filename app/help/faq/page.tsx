import "@/app/styles/help.css";

const FAQPage = () => {
  return (
    <div className="help-page">
      <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>
      {/* Getting Started */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>

        <div className="mb-6">
          <h3 className="font-semibold">What is this platform for?</h3>
          <p>
            Our platform helps people trade, sell, or give away their used
            electronics instead of throwing them away. It&apos;s designed to
            reduce e-waste and extend the life of devices like phones, laptops,
            tablets, and smartwatches.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            Is this a marketplace or a donation service?
          </h3>
          <p>
            Both! Users can list gadgets for sale, for trade, or give them away
            for free. Our goal is to keep devices in use, regardless of how
            they&apos;re passed on.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            Do I need an account to use the platform?
          </h3>
          <p>
            Yes, you&apos;ll need to create a free account to list an item or
            contact a seller. We use accounts to track your impact and keep the
            community safe.
          </p>
        </div>
      </section>

      {/* E-Waste & Environmental Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          E-Waste & Environmental Impact
        </h2>

        <div className="mb-6">
          <h3 className="font-semibold">
            What is e-waste and why is it dangerous?
          </h3>
          <p>
            E-waste refers to discarded electronics. Devices contain hazardous
            materials like lead, mercury, lithium, and cadmium. When thrown into
            landfills, these substances leak into soil and water, harming
            ecosystems and people.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            How do you calculate how much waste I've prevented?
          </h3>
          <p>
            We use industry averages based on the type of device you trade or
            list. For example, a phone typically weighs ~200g and contains
            around 900mg of mercury, 15–20g of plastic, and trace amounts of
            lead. We total these numbers in your account so you can see your
            impact over time.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">Where can I see my total impact?</h3>
          <p>
            Your profile page includes a running tally of how much e-waste
            you've prevented, including kilograms of diverted material and grams
            of hazardous chemicals kept out of landfills.
          </p>
        </div>
      </section>

      {/* Platform & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Platform & Mission</h2>

        <div className="mb-6">
          <h3 className="font-semibold">Is this platform for profit?</h3>
          <p>
            No. This is a non-profit project focused entirely on reducing
            e-waste and supporting a circular economy. We don&apos;t charge
            listing fees or take commissions.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">What is a circular economy?</h3>
          <p>
            A circular economy keeps resources in use for as long as possible
            through reuse, repair, and recycling. It&apos;s the opposite of a
            throwaway model. Our platform exists to power that kind of
            sustainable tech lifecycle.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">How are you funded?</h3>
          <p>
            We&apos;re supported by donations and grants. Our platform runs with
            minimal overhead and open-source principles. If you&apos;d like to
            support our mission, you can donate or contribute your time and
            skills.
          </p>
        </div>
      </section>

      {/* Listings & Transactions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Listings & Transactions</h2>

        <div className="mb-6">
          <h3 className="font-semibold">
            What categories of devices can I list?
          </h3>
          <p>
            Currently, we support categories like smartphones, laptops, tablets,
            smartwatches, game consoles, and headphones. More categories are
            coming soon.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">How do trades or purchases work?</h3>
          <p>
            Once a user expresses interest in your listing, you&apos;ll connect
            via messaging to arrange shipping, payment, or in-person exchange.
            We don&apos;t facilitate payments, so always use secure and trusted
            methods.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            Is there any buyer/seller protection?
          </h3>
          <p>
            Because we don&apos;t process payments or charge fees, we don&apos;t
            offer formal protection. We recommend users meet locally when
            possible, use tracked shipping, and communicate clearly. Community
            trust is key to our platform&apos;s success.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shipping</h2>

        <div className="mb-6">
          <h3 className="font-semibold">Do I have to ship items myself?</h3>
          <p>
            Yes, users are responsible for arranging and covering the cost of
            shipping unless you and the other party agree otherwise. We
            recommend using tracked and insured services when possible.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            What&apos;s the best way to ship electronics?
          </h3>
          <p>
            Pack devices securely using bubble wrap or padding. If available,
            reuse original boxes. Choose a shipping carrier that allows you to
            track the package and offers insurance for higher-value items.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            Can I limit listings to local pickup?
          </h3>
          <p>
            Yes. When creating a listing, you can specify if the item is
            available for shipping, local pickup, or both. This helps buyers
            filter listings based on their preferences.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">
            What happens if my item is lost or damaged in transit?
          </h3>
          <p>
            As a peer-to-peer platform, we don&apos;t handle shipping disputes.
            That&apos;s why we strongly recommend tracked and insured shipping.
            If a package is lost or damaged, file a claim directly with your
            shipping provider.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
