import type { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from "@remix-run/react";
import styles from "./tailwind.css";
import { 
  BookOpenIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/solid";

export const loader: LoaderFunction = ( { request } ) => {
  return {
    url: request.url
  }
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const matches = useMatches()
  let activeMenu = menuActiveSet( matches?.[ 1 ].id );
  
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex justify-center">

          <div className="w-[400px] max-w-[400px] h-screen overflow-scroll pb-8 relative border">
              <Nav />
              <div className="p-4">
                <Outlet />
              </div>

              <Footer activeMenu={ activeMenu } />
          </div>
            
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className="w-full h-12 shadow flex justify-center items-center sticky top-0 bg-white">
      <Logo />
    </nav>
  )
}

const Footer = ( { activeMenu }:any ) => {
  return (
    <div className="bottom-0 fixed max-w-[400px] h-12 w-full rounded-t-3xl border bg-white">
      <div className="flex items-center h-full justify-around">
        <Link to="/">
          <HomeIcon height={30} color={ activeMenu === 'home' ? 'black' : 'grey' } />
        </Link>
        <Link to="/saved">
          <BookmarkIcon height={30} color={ activeMenu === 'saved' ? 'black' : 'grey' } />
        </Link>
        <Link to="/quran">
          <BookOpenIcon height={30} color={ activeMenu === 'quran' ? 'black' : 'grey' } />
        </Link>
        <Link to="/setting">
          <Cog6ToothIcon height={30} color={ activeMenu === 'setting' ? 'black' : 'grey' } />
        </Link>
        <Link to="/account">
          <UserIcon height={30} color={ activeMenu === 'account' ? 'black' : 'grey' } />
        </Link>
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <div className=" text-[30px] font-3 font-bold ">Q</div>
  )
}

const menuActiveSet = ( url:any ) => {
  let menuActive = 'home';  
  if( url.includes( '/saved' ) ) menuActive = 'saved';
  if( url.includes( '/quran' ) ) menuActive = 'quran';
  if( url.includes( '/setting' ) ) menuActive = 'setting';
  if( url.includes( '/account' ) ) menuActive = 'account';

  return menuActive;
}