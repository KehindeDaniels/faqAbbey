// AccordionItem.tsx

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={` grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-1000" : "grid-rows-[0] opacity-0"
        }`}
      >
        <p className=" overflow-hidden">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
