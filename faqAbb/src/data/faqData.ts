// faqData.ts
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Is there a trial period available for QuickApply?",
    answer: "Yes, we offer a 14-day free trial...",
  },
  {
    question: "What is your refund policy?",
    answer: "Our refund policy is...",
  },
  {
    question: "Do I receive automatic updates for the product?",
    answer: "Yes, all updates...",
  },
];
