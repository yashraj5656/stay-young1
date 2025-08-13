import React from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "MITOLYN",
    description:
      "It is one of the only products in the world with a proprietary blend of 6 exotic nutrients and plants designed to support healthy mitochondria levels!",
    price: "$79",
    link: "https://34b65l-jlhwi2hcdskxc8b7m0h.hop.clickbank.net",
    image: "/mitolyn.png",
  },
  {
    id: 2,
    name: "ProDentim",
    description:
      "Every ProDentim you chew will support the good health of your gums and teeth.",
    price: "$49",
    link: "https://c6202tzash-oyp0c0mkcsrpkf2.hop.clickbank.net",
    image: "/prodentim.png",
  },
  {
    id: 3,
    name: "Quietum Plus",
    description:
      "A bespoke proprietary formula with 18 premium plant extracts created to support healthy hearing.",
    price: "$49",
    link: "https://3b1bcnsdj9rg9f5e6hoeuj4kb1.hop.clickbank.net",
    image: "/quientumplus.png",
  },
  {
    id: 4,
    name: "Joint Genesis",
    description:
      "Doctor-formulated joint health supplement based on Ivy League research and real-world results.",
    price: "$59",
    link: "https://4a787qwkq8qn2p3epfulv5qsd6.hop.clickbank.net",
    image: "/joint.png",
  },
  {
    id: 5,
    name: "NeuroPrime",
    description:
      "NeuroPrime is designed to help support focus, memory, and overall brain function using advanced ingredients.",
    price: "$49",
    link: "https://3d2c2h-fteqnzs2gmh6n-erdul.hop.clickbank.net",
    image: "/neuro.png",
  },
  {
    id: 6,
    name: "Gluco6",
    description:
      "This breakthrough formula uses natural ingredients to help optimize glucose control and metabolic energy.",
    price: "$49",
    link: "https://de596v2jvbuoal1fxqscgybq7a.hop.clickbank.net",
    image: "/gluco6.png",
  },
  {
    id: 7,
    name: "Pineal Guardian",
    description:
      "A blend of rare ingredients supporting memory, clarity, and overall brain wellness.",
    price: "$39",
    link: "https://97833rxcifxjxnemhdpg3bqr44.hop.clickbank.net",
    image: "/pineal.png",
  },
  {
    id: 8,
    name: "Nagano Tonic",
    description:
      "A unique mix of exotic nutrients to supercharge metabolism, energy, and youthfulness.",
    price: "$39",
    link: "https://70212g0imat96se9cqp8v16p6o.hop.clickbank.net",
    image: "/nagano.png",
  },
  {
    id: 9,
    name: "iGenics",
    description:
      "Formulated to support clearer vision and a healthy inflammatory response for your eyes.",
    price: "$39",
    link: "https://afa29mq9j9wj-hclr6hfhdr6qw.hop.clickbank.net",
    image: "/igenics.png",
  },
  {
    id: 10,
    name: "Arctic Blast",
    description:
      "Cooling relief for occasional joint and muscle discomfort — science-backed, fast-acting formula.",
    price: "$33",
    link: "https://ce76drwembok-ib61-vho99x2m.hop.clickbank.net",
    image: "/arc.png",
  },
];

export default function App() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="logo">Stay Young</h1>
          <nav className="nav-links">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero-section">
  <div className="hero-container">
    <div className="hero-text">
      <h2>Feel Younger, Live Stronger</h2>
      <p>
        Science-backed wellness to boost your energy, clarity, and confidence — naturally.
      </p>
      <a href="#products" className="shop-btn">
        Explore Supplements
      </a>
    </div>
    <div className="hero-image">
      <img src="/syh.jpg" alt="Supplements" />
    </div>
  </div>
</section>


      <main className="main-content">
        <h2 id="products" className="section-heading">
          Curated Supplements For Total Wellness
        </h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-tags">
                  {product.name.includes("Joint") && <span className="tag">🦴 Joint Support</span>}
                  {product.name.includes("Neuro") && <span className="tag">🧠 Brain Boost</span>}
                  {product.name.includes("iGenics") && <span className="tag">👁️ Vision</span>}
                  {product.name.includes("ProDentim") && <span className="tag">🦷 Dental Health</span>}
                </div>
                <strong>{product.price}</strong>
                <div className="button-container">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="buy-button">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section id="about" className="about-section">
        <div className="section-container">
          <h2>Why Choose Stay Young?</h2>
          <p>
            We’re not just another supplement site. We only recommend formulas backed by science, trusted by users, and aligned with long-term vitality goals.
          </p>
          <ul className="about-highlights">
            <li>✔️ 100% Affiliate Transparency</li>
            <li>✔️ Carefully Reviewed Health Brands</li>
            <li>✔️ Designed for 30+ Adults Who Want More Energy, Focus & Mobility</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2>Let’s Talk Wellness</h2>
          <p>
            Questions, suggestions, or feedback? Email us at <a href="mailto:info@stayyoung.com">info@stayyoung.com</a> <br />
            Follow our updates & stories on Instagram @stayyounghealth
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Stay Young. All rights reserved.</p>
      </footer>
    </>
  );
}
