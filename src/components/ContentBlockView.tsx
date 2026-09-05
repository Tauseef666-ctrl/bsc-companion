import { ContentBlock } from "@/data/types";

export function ContentBlockView({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h3
                key={i}
                className="pt-2 font-serif text-base font-semibold text-charcoal-800 dark:text-cream-50"
              >
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="space-y-1.5 pl-1">
                {block.items?.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm leading-relaxed text-charcoal-700 dark:text-cream-100"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-cream-200 dark:border-charcoal-800">
                <table className="w-full min-w-[300px] text-left text-sm">
                  <thead>
                    <tr className="bg-cream-50 dark:bg-charcoal-800">
                      {block.table?.headers.map((h, j) => (
                        <th key={j} className="px-3 py-2 font-semibold text-charcoal-700 dark:text-cream-100">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.table?.rows.map((row, r) => (
                      <tr key={r} className="border-t border-cream-100 dark:border-charcoal-800">
                        {row.map((cell, c) => (
                          <td key={c} className="px-3 py-2 text-charcoal-600 dark:text-cream-200">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "equation":
            return (
              <div
                key={i}
                className="rounded-xl bg-cream-50 px-4 py-3 text-center font-serif text-base italic text-charcoal-800 dark:bg-charcoal-800 dark:text-cream-50"
              >
                {block.equation}
                {block.caption && (
                  <p className="mt-1 font-sans text-xs not-italic text-charcoal-400">
                    {block.caption}
                  </p>
                )}
              </div>
            );
          case "note":
            return (
              <div
                key={i}
                className="rounded-xl border-l-4 border-sage-500 bg-sage-50 px-4 py-3 text-sm text-sage-800 dark:bg-sage-900/30 dark:text-sage-200"
              >
                <span className="font-semibold">Note: </span>
                {block.text}
              </div>
            );
          case "definition":
            return (
              <div
                key={i}
                className="rounded-xl border-l-4 border-lavender-500 bg-lavender-50 px-4 py-3 text-sm text-lavender-800 dark:bg-lavender-900/30 dark:text-lavender-200"
              >
                <span className="font-semibold">Definition: </span>
                {block.text}
              </div>
            );
          case "example":
            return (
              <div
                key={i}
                className="rounded-xl border-l-4 border-dustblue-500 bg-dustblue-50 px-4 py-3 text-sm text-dustblue-800 dark:bg-dustblue-900/30 dark:text-dustblue-200"
              >
                <span className="font-semibold">Example: </span>
                {block.text}
              </div>
            );
          case "tip":
            return (
              <div
                key={i}
                className="rounded-xl border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
              >
                <span className="font-semibold">Tip: </span>
                {block.text}
              </div>
            );
          default:
            return (
              <p
                key={i}
                className="text-sm leading-relaxed text-charcoal-700 dark:text-cream-100"
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}