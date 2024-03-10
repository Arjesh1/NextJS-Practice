import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page!</h1>
      <div className="bg-red-100 flex justify-between">
        <Link href='/performance'>Performance</Link>
        <Link href='/scale'>Scale</Link>
        <Link href='/services'>Services</Link>
      </div>

    </div>
    
  );
}
