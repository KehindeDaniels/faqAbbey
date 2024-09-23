// faqData.ts
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  { question: "Is there a trial period available for QuickApply?", answer: "Yes, we offer a 7-day free trial for new users." },
  { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee for any unsatisfactory service." },
  { question: "Do I receive automatic updates for the product?", answer: "Yes, all updates are rolled out automatically." },
  { question: "Will I have support and access to tutorials?", answer: "Yes, all users will have access to customer support and our library of tutorials." },
  { question: "How does billing work?", answer: "Billing is handled on a monthly subscription basis." },
  // Add more FAQs as needed
];
