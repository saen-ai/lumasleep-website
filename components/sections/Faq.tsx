import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { ChevronDownIcon } from "../icons";
import { FAQS, SITE } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading eyebrow="Questions" title="Good to know" />

        <div className="mx-auto mt-12 max-w-3xl">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={(i % 4) * 60}>
              <details className="group border-b" style={{ borderColor: "rgba(255,255,255,0.09)" }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.05rem] font-medium text-linen marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDownIcon
                    width={20}
                    height={20}
                    className="shrink-0 text-cedar transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-5 pr-8 text-[0.97rem] leading-relaxed text-cedar">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-[0.95rem] text-cedar">
            Still curious? Reach us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-amber">
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
