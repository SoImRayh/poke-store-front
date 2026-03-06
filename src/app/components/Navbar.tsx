import Link from "next/link"
import { appLinks } from "../global/links"
import ThemeButton from "./ThemeButton"

type NavParams = {

}
export default function (params: NavParams) {

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"/"}>Rayh.dev</Link>
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="mx-8">
              <summary className="text-lg">Apps</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                {appLinks.map((link, index) => (
                  <li key={"index_li_" + index}><Link href={link.path}>{link.name}</Link></li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
        <ThemeButton/>
      </div>
    </div>
  )
}