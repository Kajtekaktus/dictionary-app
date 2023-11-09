import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import WordInfo from "./components/WordInfo";

export type WordDefinition = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}[];

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState<WordDefinition>();

  const fetchWordData = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchWordData();
  }, [word]);

  return (
    <div className="flex flex-col w-1/2 h-full bg-slate-300 rounded-3xl">
      <Form setWord={setWord} />
      {data && <WordInfo data={data} />}
    </div>
  );
}

export default App;
