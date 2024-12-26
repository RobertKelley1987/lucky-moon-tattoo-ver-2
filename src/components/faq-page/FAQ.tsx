import React, { useState } from "react";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import type { FAQ as FAQType } from "../../types";

type FAQProps = {
  faq: FAQType;
};

function FAQ({ faq }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      setIsOpen((prev) => !prev);
    }
  }

  return (
    <div>
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="faq-question"
        data-text={faq.q}
        tabIndex={0}
      >
        {isOpen ? <Minus className="faq-svg" /> : <Plus className="faq-svg" />}
        <p>{faq.q}</p>
      </div>
      {isOpen && <p className="faq-answer">{faq.a}</p>}
    </div>
  );
}

export default FAQ;
