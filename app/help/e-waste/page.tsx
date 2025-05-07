import React from "react";

const EWasteInfoPage = () => {
  return (
    <div className="e-waste-info">
      <h1>Electronic Waste Prevention</h1>
      <p>
        Each traded item prevents the release of electronic waste and hazardous
        materials. Below is an estimated breakdown:
      </p>

      <section>
        <h2>1. Phones</h2>
        <p>
          <strong>Avg. weight:</strong> 0.2–0.3 kg
        </p>
        <h3>Hazardous Materials:</h3>
        <ul>
          <li>Lead (Pb): ~0.1g (in solder)</li>
          <li>Mercury (Hg): ~0.001g (in older LCDs)</li>
          <li>Arsenic, cadmium, and brominated flame retardants (BFRs)</li>
          <li>Rare earth metals (e.g., neodymium, yttrium)</li>
        </ul>
        <p>
          <strong>E-waste prevention:</strong> ~0.25 kg per device
        </p>
      </section>

      <section>
        <h2>2. Laptops</h2>
        <p>
          <strong>Avg. weight:</strong> 1.5–3 kg
        </p>
        <h3>Hazardous Materials:</h3>
        <ul>
          <li>Lead: ~1–2g</li>
          <li>Cadmium: ~0.01g</li>
          <li>BFRs in plastic casing and circuit boards</li>
          <li>Lithium-ion battery (high fire risk if trashed)</li>
        </ul>
        <p>
          <strong>E-waste prevention:</strong> ~2.5 kg per device
        </p>
      </section>

      <section>
        <h2>3. Tablets</h2>
        <p>
          <strong>Avg. weight:</strong> 0.5–1 kg
        </p>
        <h3>Hazardous Materials:</h3>
        <ul>
          <li>Similar to phones, slightly higher lithium content</li>
        </ul>
        <p>
          <strong>E-waste prevention:</strong> ~0.8 kg per device
        </p>
      </section>

      <section>
        <h2>4. Accessories (chargers, cables, earphones)</h2>
        <p>
          <strong>Avg. weight:</strong> 0.1–0.3 kg
        </p>
        <h3>Hazardous Materials:</h3>
        <ul>
          <li>PVC (contains chlorine)</li>
          <li>BFRs in insulation</li>
        </ul>
        <p>
          <strong>E-waste prevention:</strong> ~0.15 kg per item
        </p>
      </section>

      <section>
        <h2>5. Other Gadgets (e.g., Smart Watches)</h2>
        <p>
          <strong>Avg. weight:</strong> 0.05–0.15 kg
        </p>
        <h3>Hazardous Materials:</h3>
        <ul>
          <li>Lithium batteries</li>
          <li>BFRs in casings</li>
        </ul>
        <p>
          <strong>E-waste prevention:</strong> ~0.1 kg per device
        </p>
      </section>

      <section>
        <h2>Sources</h2>
        <ul>
          <li>
            <a
              href="https://ewastemonitor.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global E-Waste Monitor 2020
            </a>{" "}
            - United Nations University
          </li>
          <li>
            <a
              href="https://www.epa.gov/recycle/electronics-donation-and-recycling"
              target="_blank"
              rel="noopener noreferrer"
            >
              EPA - Electronics Donation and Recycling
            </a>
          </li>
          <li>
            <a
              href="https://www.ifixit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iFixit teardown data
            </a>
          </li>
          <li>
            <a
              href="https://www.itu.int/en/ITU-D/Statistics/Documents/publications/EWaste_statistics_guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ITU - E-waste statistics guidelines
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EWasteInfoPage;
