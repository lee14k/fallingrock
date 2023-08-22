import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Footer from "../../../components/Footer";
export default function Menu() {
  return (
    <div>
      <Navbar />
      <div className="menuwrap">
      <h1 className="breakfasthead">Our Menu</h1>
      <Link href="https://order.toasttab.com/online/falling-rock-cafe-and-bookstore">
        <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >Order Online</button>
      </Link>
      <div className="menupics">
      <Image src="/menu.png" height={500} width={500} />
            <Image src="/bowls.png" height={500} width={500} />

      </div>
      </div>
      <Footer/>
    </div>
  );
}
