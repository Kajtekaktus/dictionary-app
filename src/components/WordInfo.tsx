import Definition from "./Definition";
import { WordDefinition } from "../App";
import Header from "./Header";

type WordInfoProps = {
  data: WordDefinition;
};

const WordInfo = ({ data }: WordInfoProps) => {
  const definitionsArr: string[] = [];

  //  wybieranie wszystkich definicji i dodawanie ich do tablicy
  data.map((i) =>
    i.meanings.map((j) =>
      j.definitions.map((k) => definitionsArr.push(k.definition))
    )
  );

  console.log("tablica z definicjami: ", definitionsArr);

  return (
    <div>
      <Header word={data[0].word} phonetic={data[0].phonetic} />
      <h2 className="text-2xl ml-10 mt-10">Meanings: </h2> <br />
      <div className="flex justify-center items-center">
        <ul className="list-disc w-[70%]">
          {definitionsArr.map((item, index) => (
            <Definition text={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordInfo;
