import Title from "./Title";
import Count from "./Count";
import ButtonReset from "./ButtonReset";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ButtonReset setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}
