import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/about">
        <a>About page</a>
      </Link>
    </div>
  )
}
