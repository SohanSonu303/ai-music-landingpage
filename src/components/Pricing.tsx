"use client";

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "1000 credits (once)",
      "Music generation",
      "Song generation",
      "Standard downloads",
      "No Album support",
      "No Lyrics generation",
    ],
    buttonText: "Get Started",
    type: "standard",
  },
  {
    name: "Basic",
    price: "6",
    features: [
      "6000 credits / mo",
      "Music & Song gen",
      "Only 1 time album gen",
      "SFX & Lyrics gen",
      "Full stem access",
      "Prompt enhancer",
    ],
    buttonText: "Upgrade to Basic",
    type: "standard",
  },
  {
    name: "Pro",
    price: "15",
    features: [
      "10,000 credits / mo",
      "Unlimited album gen",
      "SFX & Lyrics gen",
      "Full stem access",
      "Prompt enhancer",
      "Community access",
    ],
    buttonText: "Go Pro Now",
    type: "pro",
  },
  {
    name: "Premium",
    price: "35",
    features: [
      "21,000 credits / mo",
      "Everything in Pro",
      "No limit album gen",
      "SFX & Lyrics gen",
      "Full stem access",
      "Priority AI queue",
    ],
    buttonText: "Go Premium",
    type: "premium",
    recommended: true,
  },
];

import { useDevModal } from "./DevModalContext";

export default function Pricing() {
  const { openModal } = useDevModal();

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-8 py-24 bg-surface-container-lowest">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
          Choose Your <span className="text-primary">Bandwidth</span>
        </h2>
        <p className="text-on-surface-variant">
          Scalable plans for bedroom producers and major studios.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 border flex flex-col rounded-md relative ${
              plan.type === "pro"
                ? "bg-surface-container-high border-primary/20 ambient-shadow z-10"
                : plan.type === "premium"
                ? "bg-surface-variant border-tertiary/30 ambient-shadow"
                : "bg-surface-container-low border-outline-variant/15"
            }`}
          >
            {plan.type === "premium" && (
              <div className="absolute top-0 bg-tertiary text-on-tertiary text-[10px] font-black uppercase px-4 py-1 tracking-tighter left-1/2 -translate-x-1/2">
                Recommended
              </div>
            )}
            <div className="mb-8">
              <h3
                className={`font-headline text-lg font-medium mb-2 tracking-tight ${
                  plan.type === "pro"
                    ? "text-primary"
                    : plan.type === "premium"
                    ? "text-tertiary"
                    : "text-on-surface-variant"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-headline text-on-surface tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-outline text-sm">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-sm text-on-surface ${
                    plan.type === "premium" && i === 1 ? "font-bold" : ""
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-lg ${
                      plan.type === "premium" ? "text-tertiary" : "text-primary"
                    }`}
                  >
                    {plan.type === "premium" && i === 0
                      ? "auto_awesome"
                      : plan.type === "premium" && i === 1
                      ? "verified_user"
                      : plan.type === "premium" && i === 2
                      ? "api"
                      : plan.type === "premium" && i === 3
                      ? "speed"
                      : "check_circle"}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={openModal}
              className={`w-full py-3 rounded-full font-bold transition-all ${
                plan.type === "pro"
                  ? "bg-primary text-on-primary hover:brightness-110"
                  : plan.type === "premium"
                  ? "bg-tertiary text-on-tertiary hover:brightness-110"
                  : "border border-primary/20 text-primary hover:bg-primary/10"
              }`}
            >
              {plan.type === "pro"
                ? "Go Pro Now"
                : plan.type === "premium"
                ? "Go Premium"
                : index === 1
                ? "Upgrade to Basic"
                : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
