import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import surat from "~/data/surat.json"


export default function Index() {
  const data = useLoaderData()
  return (
    <div>
      { surat.map( v => (
        <Link to={ `/quran/${ v.nama_latin.toLocaleLowerCase() }` } key={ v.nomor }>
          <div className="border p-4 rounded-lg mb-2">

            <div className="flex justify-between">

              <div className=" text-xs">
                <div>
                  { v.nomor }. { v.nama_latin }
                </div>
                <div>
                  { v.jumlah_ayat } ayat
                </div>
              </div>

              <div className="text-lg">
                { v.nama }
              </div>

            </div>

          </div>
        </Link>

      ) )  }
    </div>
  );
}
