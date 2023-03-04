/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Fuse from 'fuse.js';
import surat from '~/data/surat.json';
import { Link } from "@remix-run/react";

function index() {
  const [ query, setQuery ] = useState( '' );
  const [ results, setResults ] = useState( [] );
  
  const options = {
    includeScore: true,
    keys: [ 'nama', 'nama_latin', 'deskripsi' ]
  }
  const fuse = new Fuse( surat, options );
    
  const queryChange = ( e: any ) => {
    const val = e.target.value
    setQuery( val );
    const result = fuse.search( val, { limit: 10 } );
    setResults( result );
  }

  console.log( {results} )
  return (
    <div className='block'>
      <input className='w-full border' type="text" defaultValue={ query } onChange={ queryChange }/>

      <div>
        { results.map( ( v:any, i:number ) => {
          return (
            <Link key={ i } to={ `/quran/${ v.item.nama_latin.toLowerCase() }` }>
              <div className='border p-4 my-2'>
                { v.item.nama_latin }
              </div>
            </Link>
          )
        } )}
      </div>
    </div>
  )
}

export default index