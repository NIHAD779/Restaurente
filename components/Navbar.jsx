import { links1,links2 } from "../public/data";
import Link from 'next/link';
import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" flex bg-red-500 justify-between px-10 items-center">
      <div className="flex gap-3">
      <div className="bg-white rounded-full p-2"><Image src = "/../public/Assets/telephone.png" alt = 'phone' width="50" height="50"/></div>
        <div>
          <h1>ORDER NOW</h1>
          <h2>012 345 678</h2>
        </div>
      </div>
      <div className="flex gap-10 items-center">
      {
        links1.map(({name,path}) =>{
          return (
            <>
            <Link href={path}>
              <p>{name}</p>
            </Link>
            </>
          )
        })
      }
      <Image src = "/../public/Assets/logo.png" alt = 'logo' width="100" height="100"/>
      {
        links2.map(({name,path}) =>{
          return (
            <>
            <Link href={path}>
              <p>{name}</p>
            </Link>
            </>
          )
        })
      }
      </div>
      <Image src = "/../public/Assets/cart.png" alt = 'cart' width="60" height="60"/>
    </div>
  )
}

export default Navbar