import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import Navbar from "./Navbar";

type FormProps = {
    setWord:Dispatch<SetStateAction<string>>
}

const Form = ({setWord}:FormProps ) => {
  
    const input = useRef<HTMLInputElement>(null)

  function submitHandler(e:FormEvent) {
    e.preventDefault();
    if (input.current?.value) {
        setWord(input.current.value)
    }else{
        alert('enter the correct word')
    }
  }
  return (
    <div className=" min-h-[200px] flex flex-col  items-center">
        <Navbar />
      <form onSubmit={submitHandler}>
        <input
          className="w-[400px] min-h-[50px] rounded-xl my-[20px]"
          type="text"
          name="word-input"
          id="word-input"
          ref={input}
        />
      </form>
    </div>
  );
};

export default Form;
