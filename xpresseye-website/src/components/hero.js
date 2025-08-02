export function createHero() {
  return `
    <section class="hero" id="home">
      <div class="container">
        <h1>XpressEye Solutions</h1>
        <p>Fast, Professional Website Solutions for Your Business</p>
        <button class="cta-button" onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})">
          Get Started
        </button>
      </div>
    </section>
  `
}