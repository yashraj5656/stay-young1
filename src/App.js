import React from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "MITOLYN",
    description:
      "It is one of the only product in the world with a proprietary blend of 6 exotic nutrients and plants designed to support healthy mitochondria levels!",
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
      "A bespoke proprietary formula that includes 18 special high-quality plant extracts that are specially created to support a healthy hearing",
    price: "$49",
    link: "https://3b1bcnsdj9rg9f5e6hoeuj4kb1.hop.clickbank.net",
    image: "/quientumplus.png",
  },
  {
    id: 4,
    name: "Joint Genesis",
    description:
      "Joint Genesis™ is a brand-new, doctor-formulated joint health supplement born out of Ivy League research, and backed by real-world results.",
    price: "$59",
    link: "https://4a787qwkq8qn2p3epfulv5qsd6.hop.clickbank.net",
    image: "/joint.png",
  },
  {
    id: 5,
    name: "NeuroPrime",
    description:
      "NeuroPrime is like nothing you've ever tried before... it's based off a closely guarded formula that's said to be able to help support memory function.",
    price: "$49",
    link: "https://3d2c2h-fteqnzs2gmh6n-erdul.hop.clickbank.net",
    image: "/neuro.png",
  },
  {
    id: 6,
    name: "Gluco6",
    description:
      "Our breakthrough formula combines cutting-edge science with natural ingredients to optimize glucose control and boost your metabolism.",
    price: "$49",
    link: "https://de596v2jvbuoal1fxqscgybq7a.hop.clickbank.net",
    image: "/gluco6.png",
  },
  {
    id: 7,
    name: "Pineal Guardian",
    description:
      "With its unique blend of extremely hard to source ingredients, Pineal Guardian helps potentially support memory function and overall brain health.",
    price: "$39",
    link: "https://97833rxcifxjxnemhdpg3bqr44.hop.clickbank.net",
    image: "/pineal.png",
  },
  {
    id: 8,
    name: "Nagano Tonic",
    description:
      "When you combine these exotic nutrients in perfect harmony, you’ll enjoy the exhilarating effect of a turbo-charged metabolism, healthy fat loss, boundless energy, and feeling younger all over.",
    price: "$39",
    link: "https://70212g0imat96se9cqp8v16p6o.hop.clickbank.net",
    image: "/nagano.png",
  },
  {
    id: 9,
    name: "iGenics",
    description:
      "iGenics is designed to support clearer vision by maintaining a healthy inflammatory response.",
    price: "$39",
    link: "https://afa29mq9j9wj-hclr6hfhdr6qw.hop.clickbank.net",
    image: "/igenics.png",
  },
  {
    id: 10,
    name: "Arctic Blast",
    description:
      "Arctic Blast™ is a unique cooling formula that is backed by science to provide temporary relief for occasional aches and discomfort.",
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
        <div className="hero-content">
          <h2>FRESH SUPPLEMENTS</h2>
          <p>
            Premium wellness products to keep you young, energized and healthy.
          </p>
          <a href="#products" className="shop-btn">
            Shop Now
          </a>
        </div>
      </section>

      <main className="main-content">
        <h2 id="products" className="section-heading">
          Our Supplements
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
          <h2>About Stay Young</h2><br></br>
          <p>
            At Stay Young, we believe that true health is the foundation of a
            long, vibrant life. Our carefully curated collection of premium
            health supplements is designed to support your body's natural
            vitality, helping you feel energetic, strong, and youthful every
            day.
          </p>
          <p>
            We understand that maintaining wellness is not just about temporary
            solutions—it's about adopting a lifestyle that nurtures your body,
            mind, and spirit. That’s why we bring you a thoughtfully selected
            range of supplements crafted with premium, scientifically-backed
            ingredients. From enhancing immune function to promoting cellular
            health, each formula is designed to work in harmony with your
            body’s natural processes, ensuring long-term vitality and
            resilience.
          </p>
          <p>
            At Stay Young, we don’t just offer supplements—we offer a
            commitment to your well-being. Whether you’re looking for extra
            support in your daily routine or aiming to optimize your health for
            years to come, our products empower you to embrace life with
            strength, energy, and confidence. Because when you prioritize
            wellness, every moment becomes an opportunity to live fully, feel
            youthful, and stay vibrant—naturally.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2>Contact Us</h2><br></br>
          <p>
            Have questions or feedback? Email us at{" "}
            <a href="mailto:info@stayyoung.com">info@stayyoung.com</a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Stay Young. All rights reserved.</p>
      </footer>
    </>
  );
}
