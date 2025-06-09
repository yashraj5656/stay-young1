import React from "react";

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
    price: "$49",
    link: "https://4a787qwkq8qn2p3epfulv5qsd6.hop.clickbank.net",
    image: "/joint.png",
  },
];

export default function StayYoungStore() {
  return (
    <>
      <head>
        <title>Stay Young - Health Supplements Store</title>
        <meta
          name="description"
          content="Shop premium health supplements for vitality, energy, and wellness."
        />
        <meta
          name="keywords"
          content="Health Supplements, Nutrition, Vitality, Wellness, Stay Young"
        />
        <meta name="author" content="Stay Young" />
      </head>

      <header style={{ backgroundColor: "#f3f3f3", padding: "0.5rem 2rem", borderBottom: "1px solid #ccc" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: "#28a745" }}>Stay Young</h1>
          <nav>
            <a href="#products" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>Products</a>
            <a href="#about" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>Contact</a>
          </nav>
        </div>
      </header>

      <section style={{ backgroundImage: 'url("/banner.jpg")', backgroundSize: "cover", backgroundPosition: "center", padding: "4rem 2rem", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>FRESH SUPPLEMENTS</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Premium wellness products to keep you young, energized and healthy.</p>
        <a href="#products" style={{ padding: "0.75rem 2rem", backgroundColor: "#28a745", color: "white", textDecoration: "none", borderRadius: "5px" }}>Shop Now</a>
      </section>

      <main style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2 id="products" style={{ textAlign: "center", margin: "2rem 0", color: "#28a745" }}>Our Supplements</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {products.map((product) => (
            <div key={product.id} style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", overflow: "hidden" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: "#28a745" }}>{product.name}</h3>
                <p style={{ color: "#555" }}>{product.description}</p>
                <strong>{product.price}</strong>
                <div style={{ marginTop: "1rem" }}>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <button style={{ padding: "0.5rem 1rem", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section id="about" style={{ backgroundColor: "#fff", padding: "2rem" }}>
        <h2 style={{ color: "#28a745" }}>About Stay Young</h2>
        <p style={{ color: "#333", maxWidth: "800px", margin: "auto" }}>
        At Stay Young, we believe that true health is the foundation of a long, vibrant life. Our carefully curated collection of premium health supplements is designed to support your body's natural vitality, helping you feel energetic, strong, and youthful every day.

We understand that maintaining wellness is not just about temporary solutions—it's about adopting a lifestyle that nurtures your body, mind, and spirit. That’s why we bring you a thoughtfully selected range of supplements crafted with premium, scientifically-backed ingredients. From enhancing immune function to promoting cellular health, each formula is designed to work in harmony with your body’s natural processes, ensuring long-term vitality and resilience.

At Stay Young, we don’t just offer supplements—we offer a commitment to your well-being. Whether you’re looking for extra support in your daily routine or aiming to optimize your health for years to come, our products empower you to embrace life with strength, energy, and confidence. Because when you prioritize wellness, every moment becomes an opportunity to live fully, feel youthful, and stay vibrant—naturally.
            </p>
      </section>

      <section id="contact" style={{ backgroundColor: "#f3f3f3", padding: "2rem" }}>
        <h2 style={{ color: "#28a745" }}>Contact Us</h2>
        <p style={{ color: "#333", textAlign: "center" }}>
          Have questions or feedback? Email us at <a href="mailto:info@stayyoung.com" style={{ color: "#28a745" }}>info@stayyoung.com</a>
        </p>
      </section>

      <footer style={{ backgroundColor: "#0f0f0f", color: "white", padding: "1rem", textAlign: "center" }}>
        <p>&copy; {new Date().getFullYear()} Stay Young. All rights reserved.</p>
      </footer>
    </>
  );
}
