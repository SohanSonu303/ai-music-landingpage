const faqs = [
  {
    question: "What is Album feature how it understands emotion through script?",
    answer:
      "Transform any story or youtube script into a full album — instantly. Paste your story, screenplay, or concept, and our AI analyzes the narrative arc, composes tracks for every scene (songs, scores, instrumentals), and generates production-ready music — all in one click.",
  },
  {
    question: "Who owns the copyright of the generated music?",
    answer:
      "For Pro and Premium users, you retain full commercial rights to use the music in any project. Free and Basic users have a personal license only.",
  },
  {
    question: "Can I upload my own samples to train the AI?",
    answer:
      "Yes, our Experimental Lab feature allows users to 'seed' the generation engine with their own 24-bit WAV samples for customized output.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-8 py-24">
      <h2 className="font-headline text-3xl font-bold text-center mb-16 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-surface-container rounded-xl p-6 border border-outline-variant/15"
          >
            <button className="flex justify-between items-center w-full text-left font-headline font-bold">
              <span>{faq.question}</span>
              <span className="material-symbols-outlined text-primary">
                expand_more
              </span>
            </button>
            <div className="mt-4 text-on-surface-variant text-sm leading-relaxed">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
