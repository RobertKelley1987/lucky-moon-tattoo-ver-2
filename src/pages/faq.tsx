import React from "react";
import SiteLayout from "../components/SiteLayout";
import Seo from "../components/Seo";
import PageTitle from "../components/PageTitle";
import FAQ from "../components/faq-page/FAQ";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import type { FAQ as FAQType } from "../types";

const faqs: FAQType[] = [
  {
    id: 1,
    q: "Do you do cover ups?",
    a: "In most cases, yes. Get in touch with the shop or one of our artists and we can discuss your options.",
  },
  {
    id: 2,
    q: "Do you accept walk-ins?",
    a: "We currently do our best to accept walk-ins, but we also cannot gaurantee same day service if you did not make an appointment.",
  },
  {
    id: 3,
    q: "What should I bring with me?",
    a: "Please bring a government issued ID proving you are over 18 years old. This can be a driver's license, passport or state ID. We cannot tattoo anyone under 18 per Rhode Island state laws. We also require partial payment up front before we begin work.",
  },
  {
    id: 4,
    q: "How much will this cost?",
    a: "The total cost will depend on the size, location and complexity of your project. When you start planning your tattoo with one of our artists they should be able to provide a rough estimate. Our shop does have a $100 minimum, except for discounts advertised during special events.",
  },
  {
    id: 5,
    q: "Can I bring a friend?",
    a: "Of course you can bring a friend. Having said that, these tattoos can take a while, so they might get bored. Use your best judgment.",
  },
];

function FAQPage() {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata();

  return (
    <>
      <Seo
        title="Lucky Moon Tattoo | FAQ"
        desc="Frequently asked questions about Lucky Moon Tattoo and its booking process. Lucky Moon Tattoo is a traditional tattoo shop in Northern Rhode Island."
        ogImage="images/drawing.png"
        path="/faq"
        url={siteUrl}
      />
      <SiteLayout>
        <main className="main">
          <div className="faq-wrapper">
            <div className="heading-wrapper">
              <span>You've got questions. We've got answers.</span>
              <PageTitle>FAQs</PageTitle>
            </div>
            <div>
              {faqs.map((faq) => (
                <FAQ key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}

export default FAQPage;
