import Link from 'next/link'

export const Header = () => {
  return (
    <div className="bg-red-100 flex justify-between">
    <Link href='/'>Home</Link>
    <Link href='/performance'>Performance</Link>
    <Link href='/scale'>Scale</Link>
    <Link href='/services'>Services</Link>
  </div>
  )
}
