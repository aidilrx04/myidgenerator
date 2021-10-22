import Head from 'next/head';
import Image from 'next/image';
import GeneratorForm from '../components/GeneratorForm';

export default function Home()
{
  return (
    <div id="Home">
      <HomeHeadContent />
      <main>
        <div className="text-center py-4 px-2">
          <h1 className="font-bold text-4xl   ">
            Malaysia ID Number Generator
          </h1>
          <p>
            <span>By </span>
            <a
              href="https://github.com/aidilrx04"
              className="font-bold link"
            > aidilrx04</a>
          </p>
          <div className="flex justify-center items-center">
            <a href="/doc" className="link px-2">API</a>
            &nbsp;
            <a href="https://github.com/aidilrx04/myidgenerator" className="px-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" width={ 17 } height={ 17 } />
            </a>
          </div>
        </div>
        <GeneratorForm />
        <div className="w-[600px] max-w-full bg-white mx-auto my-2 p-2">
          <b>Keywords: </b>
          <p className="text-sm">
            { [ 'Malaysia ID Number Generator',
              'Malaysia IC Number Generator',
              'ID Generator',
              'IC Generator' ].map( ( kw, i ) => (
                <span key={ i } className="block">{ kw }</span>
              ) ) }
          </p>
        </div>
      </main>
    </div>
  );
}


function HomeHeadContent()
{
  return (
    <Head>
      <title>Malaysia Identity Card Number Generator</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Malaysia ID Number Generation Site" />
      <meta name="keywords" content="malaysia, ic, generator, ic generator" />
    </Head>
  );
}