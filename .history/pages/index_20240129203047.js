import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {


const classFilters = {
  1: 'Magician',
  2: 'Theif',
  4: 'Warrior',
  8: 'Bowman',
  16: 'Pirate',
  32: 'Nothing'
}

const [input, setInput] = useState();

const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: 'yellow' } : null;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <input 
        id="input"
        type="text"
        placeholder="bitmask decimal value"
        value={input}
        onChange={event => setInput(event.target.value)}
        />
        <table>
          <tbody>
            {
              Object.keys(classFilters).map(item => (
                <tr key={item} style={getClassStyle(item)}>
                  <td>{item}</td>
                  <td>{classFilters[item]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    
        <Footer/>
      </>
   
  );
}
