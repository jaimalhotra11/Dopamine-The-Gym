import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Access to gym equipment",
      "Basic fitness assessment",
      "Locker room access",
      "2 group classes per month",
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "$59",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "1 personal training session/month",
      "Access to therapy room",
      "Nutrition consultation"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "$99",
    features: [
      "All Premium features",
      "4 personal training sessions/month",
      "Priority class booking",
      "Exclusive workshops",
      "Recovery zone access",
      "Guest passes"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-16">
      <div className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Membership Plans</h1>
          <p className="text-xl">Choose the perfect plan for your fitness journey</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.popular
                    ? 'bg-purple-600 text-white transform scale-105'
                    : 'bg-white'
                } shadow-lg relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-tr-lg rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${plan.popular ? 'text-white' : 'text-purple-600'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg transition ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Can I cancel my membership anytime?",
                a: "Yes, you can cancel your membership with a 30-day notice period."
              },
              {
                q: "Are there any joining fees?",
                a: "No, we don't charge any joining fees. Just pick your plan and start your journey!"
              },
              {
                q: "Can I freeze my membership?",
                a: "Yes, you can freeze your membership for up to 3 months per year."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}