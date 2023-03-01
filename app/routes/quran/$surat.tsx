import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react';
import surat from '~/data/surat.json';
import detailSurats from '~/data/surat/index.js'

export const loader: LoaderFunction = ( { params }) => {

  const dataSurat = surat.find( ( f:any ) => f.nama_latin?.toLocaleLowerCase() === params.surat );
  const detailSurat:any = detailSurats[ dataSurat.nama_latin ];
  return { 
    dataSurat,
    detailSurat
  }
}

function Surat( { request }:any ) {
  
  const { dataSurat, detailSurat } = useLoaderData();
  return (
    <div>
      <div>{ dataSurat.nama_latin }</div>
      <div className='mt-2'>
        { detailSurat.ayat.map( ( v:any, i:any ) => {
          return(
            <div key={ i } className='mt-8 pb-2 border-b'>
              <div className='text-right text-lg'>{ v.ar }</div>
              <div className='text-xs mt-2'>{ v.idn }</div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default Surat