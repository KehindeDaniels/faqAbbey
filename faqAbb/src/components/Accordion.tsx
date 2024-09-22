// Accordion.tsx
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqData";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
