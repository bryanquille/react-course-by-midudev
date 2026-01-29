import Link from "../Link"

function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga officia rem. Aut voluptatum id dolorum velit magnam delectus quidem vero natus impedit, error ipsa exercitationem blanditiis quisquam perferendis temporibus.</p>
      <Link
        pathTo="/about"
      >
        Go to AboutPage
      </Link>
    </>
  )
}

export default HomePage