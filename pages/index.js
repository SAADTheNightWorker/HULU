import { Inter } from "next/font/google";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "../utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }) {
  return (
    <div className={inter.className}>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  
  const requestUrl = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`;

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.status_message || "Failed to fetch data");
    }

    return {
      props: {
        results: data.results,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        results: [],
      },
    };
  }
}
