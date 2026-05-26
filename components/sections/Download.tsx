import { Reveal } from "../Reveal";
import { StoreButtons } from "../Brand";
import { MoonIcon } from "../icons";

export function Download() {
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-7 py-16 text-center sm:px-12 sm:py-20"
            style={{
              background:
                "radial-gradient(120% 140% at 50% -20%, rgba(108,99,255,0.35), transparent 60%), linear-gradient(160deg, rgba(30,37,69,0.7), rgba(11,15,30,0.7))",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(14px)",
            }}
          >
            <span
              aria-hidden
              className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl text-amber"
              style={{
                background: "rgba(232,168,56,0.12)",
                border: "1px solid rgba(232,168,56,0.25)",
                animation: "breathe 5s ease-in-out infinite",
              }}
            >
              <MoonIcon width={30} height={30} />
            </span>

            <h2 className="font-display text-[clamp(2.1rem,5vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.01em]">
              Ready for the best
              <br />
              sleep of your life?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[1.05rem] text-cedar">
              Download LumaSleep and turn tonight into the start of a calmer routine.
            </p>

            <div className="mt-9 flex justify-center">
              <StoreButtons />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
