import { Timeline } from "@/components/ui/timeline";
import { experiences } from "@/constants";

export function TimelineDemo() {

    const data = experiences.map((item) => ({
  title: item.title,
  content: (
    <div className="flex flex-col md:flex-row md:items-start gap-6 pb-10">
      <img
        src={item.icon}
        alt={`${item.title} Logo`}
        width={64}
        height={64}
        className="rounded-lg shadow-md object-contain bg-white p-2 h-16 w-16"
      />
      <div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
          {item.position}
        </h2>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {item.date}
        </h3>
        <p className="text-sm mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  ),
}));

 

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12 overflow-clip border-2 border-green mb-6">
      <Timeline data={data} />
    </div>
  );
}
