import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type }) {
  const handleClick = () => {
    setCount((prev) => (type === "minus" ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleClick}
      className="count-btn"
    >
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
