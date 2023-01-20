import { type NextPage } from "next";
import Head from "next/head";
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const Home: NextPage = () => {
  return (
    <>
      
      <Head>
        <title>{"victoria's site"}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Nav/> */}
      <main className='bg-white'>
        <Header/>
          <About/>
          <div className='p-10'>
            <div  className='flex p-10 text-sky-600 text-2xl justify-center'>
              <h1>{"my projects"}</h1>
            </div>
            <Projects/>
          </div>
        <Contact/>
      </main>
      
    </>
  );
};

export default Home;

