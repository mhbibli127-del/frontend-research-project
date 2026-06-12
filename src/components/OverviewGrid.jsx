import StatCard from "./StatCard"

export default function OverviewGrid({ data = [], loading }) {
  if (loading && !data.length) {
    return (
      <section
        className="flex w-full min-w-0 items-center justify-center rounded-[24px] bg-card p-6 text-[14px] text-muted sm:max-w-[328px]"
        aria-busy="true"
        aria-label="Loading today's overview"
      >
        Loading...
      </section>
    )
  }

  if (!data.length) return null

  return (
    <section className="w-full min-w-0 sm:max-w-[328px]" aria-label="Today's overview">
      <h2 className="mb-[14px] text-[15px] font-semibold leading-none text-white sm:text-[16px]">
        Today&apos;s Overview
      </h2>

      <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-[12px]">
        {data.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
