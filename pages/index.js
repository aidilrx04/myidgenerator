import Head from 'next/head';
import Image from 'next/image';
import GeneratorForm from '../components/GeneratorForm';

export default function Home()
{
  return (
    <div id="Home">
      <HomeHeadContent />
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
        <div>
          <a href="/doc" className="link px-5">API</a>
          &nbsp;
          <a href="https://github.com/aidilrx04/myidgenerator" className="px-5">
            <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" width={ 17 } height={ 17 } />
          </a>
        </div>
      </div>
      <GeneratorForm />
    </div>
  );
}


function HomeHeadContent()
{
  return (
    <Head>
      <title>Malaysia Identity Card Number Generator</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}