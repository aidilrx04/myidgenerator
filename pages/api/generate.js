
import PlaceOfBirth from './pb_codes.json';

function generate()
{
    const genders = [ '13579', '24680' ];
    const months = '01 02 03 04 05 06 07 08 09 10 11 12'.split( ' ' );
    const pb_codes = PlaceOfBirth.reduce( ( a, c ) => a.concat( c.codes ), [] ).sort( ( a, b ) => a - b );
    let id = '';
    const year = Math.floor( Math.random() * 99 );
    const isLeapYear = year % 4 === 0;
    const month = months[ Math.floor( Math.random() * months.length ) ];
    const maxDay = parseInt( month ) <= 7
        ? parseInt( month ) % 2 === 0
            ? parseInt( month ) === 2
                ? isLeapYear
                    ? 29
                    : 28
                : 30
            : 31
        : parseInt( month ) % 2 === 0
            ? 31
            : 30;
    const day = Math.floor( Math.random() * maxDay ) + 1;

    id += parseInt( year ) < 10 ? `0${year}` : year;
    id += month;
    id += day < 10 ? `0${day}` : day;
    id += `-${pb_codes[ Math.floor( Math.random() * pb_codes.length ) ]}-`;
    id += Math.floor( Math.random() * 10 );
    id += Math.floor( Math.random() * 10 );
    id += Math.floor( Math.random() * 10 );
    id += genders[ Math.floor( Math.random() * 2 ) ][ Math.floor( Math.random() * 5 ) ];
    console.log( Math.floor( Math.random() * -12 ) + 1 );

    return id;
}

export default function handler( req, res )
{
    const id = generate();
    res.status( 200 ).json(
        {
            status: true,
            id: id
        }
    );
}


