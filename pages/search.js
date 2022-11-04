import Head from "next/head"
import Header from "./components/header"
import Response from "../Response"
import {useRouter} from "next/router"
import SearchResults from "./components/SearchResults"

export default function Search({ results }) {
  const router = useRouter();
  console.log(results)
  return (
    <div>
    <Head>
      <title>{router.query.term} - Goblog Search</title>
    </Head>

    <Header />

    <SearchResults results={results} />
  </div>
  )
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}