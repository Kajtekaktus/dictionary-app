import { PlayCircle } from "lucide-react";

type HeaderProps = {
    word:string,
    phonetic:string
}

const Header = ({ word, phonetic }:HeaderProps) => {
  
  function playAudio() {
    
  }
  
    return (
    <div className="flex justify-between px-16 py-10 items-center">
      <div>
        <h2 className="text-[80px]">{word}</h2>
        <div className="phonetic">{phonetic}</div>
      </div>
      <PlayCircle size={100} onClick={playAudio} />
    </div>
  );
};

export default Header;
