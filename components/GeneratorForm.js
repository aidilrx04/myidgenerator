import axios from 'axios';
import React, { useState } from 'react';


function GeneratorForms()
{
    const [ id, setId ] = useState();
    const [ error, setErr ] = useState();
    function generateId()
    {
        axios.get( '/api/generate' )
            .then( ( res ) =>
            {
                console.log( res );
                setId( res.data?.id );
                setErr( null );

            } )
            .catch( err =>
            {
                console.error( 'ERROR', err );
                setErr( 'Failed to generate ID' );
            } );
    }

    return (
        <div className="w-[600px] max-w-full bg-white mx-auto p-2
                         ">
            <h2 className="text-center font-bold text-2xl">Generator</h2>

            <div id="output" className="px-5 py-10 my-2 bg-gray-100" >
                <p className="text-center text-3xl      ">
                    { id ?? ' ' }
                </p>
            </div>

            {
                error &&
                <div className="p-1 my-2 text-center text-red-800 bg-red-300">
                    { error }
                </div>
            }

            <button className="text-xl font-bold max-w-max bg-black text-white px-2 py-3 rounded block mx-auto
                            hover:bg-opacity-[.8]  transition-all"
                onClick={ generateId }>Generate ID</button>

            {/* Advance Options */ }
        </div>
    );
}

export default GeneratorForms;
