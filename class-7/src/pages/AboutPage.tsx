import Link from "../Link"

function AboutPage() {
  return (
    <>
      <h1>AboutPage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga officia rem. Aut voluptatum id dolorum velit magnam delectus quidem vero natus impedit, error ipsa exercitationem blanditiis quisquam perferendis temporibus.</p>
      <img src="https://cdn.pixabay.com/photo/2026/01/11/08/15/08-15-24-346_1280.png" alt="Image of a girl who is seeing fireworks." />
      <Link
        pathTo="/"
      >
        Go to HomePage
      </Link>
    </>
  )
}

export default AboutPage