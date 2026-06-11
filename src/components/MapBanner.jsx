import { images } from "../data/mockData"

export default function MapBanner() {
  return (
    <section
      className="relative h-[260px] w-full min-w-0 overflow-hidden rounded-[24px] sm:h-[300px] sm:rounded-[32px] lg:mt-[30px] lg:h-[348px]"
      aria-label="Global weather map"
    >
      <img
        src={images.mapBanner}
        alt="City skyline at dusk"
        className="absolute inset-0 h-full w-full object-cover object-[center_75%]"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/65" />

      <div className="absolute left-4 right-4 top-4 sm:left-[16px] sm:right-[16px] sm:top-[16px]">
        <div className="rounded-[14px] bg-white/12 px-4 py-3 backdrop-blur-[6px] sm:rounded-[16px] sm:px-[16px] sm:py-[14px]">
          <p className="text-[12px] font-medium leading-[1.45] text-white sm:text-[13px]">
            Explore global map of wind weather and ocean condition
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 sm:bottom-[16px] sm:left-[16px] sm:right-[16px]">
        <button
          type="button"
          className="w-full rounded-[12px] bg-white py-3 text-[11px] font-bold uppercase tracking-[0.06em] text-[#0d0d0d] sm:rounded-[14px] sm:py-[14px] sm:text-[12px]"
        >
          GET STARTED
        </button>
      </div>
    </section>
  )
}
