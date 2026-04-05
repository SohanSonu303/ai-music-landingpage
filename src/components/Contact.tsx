export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">
          Get in <span className="text-primary text-glow">Touch</span>
        </h2>
        <p className="text-on-surface-variant">
          Have questions about our service or custom enterprise solutions?
        </p>
      </div>
      <form action="#" className="space-y-6" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="block font-label text-xs uppercase tracking-widest text-outline ml-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-md px-6 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm"
              id="name"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block font-label text-xs uppercase tracking-widest text-outline ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-md px-6 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm"
              id="email"
              placeholder="john@example.com"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="block font-label text-xs uppercase tracking-widest text-outline ml-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-md px-6 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32 resize-none shadow-sm"
            id="message"
            placeholder="How can we help you create?"
          ></textarea>
        </div>
        <button className="w-full bg-primary text-on-primary py-4 rounded-md font-bold font-headline text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}
