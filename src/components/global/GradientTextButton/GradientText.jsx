import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export function GradientText({
  icon = "✨",
  title = "Introducing FoodSnap.in",
}) {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 border border-emerald-200 bg-emerald-50/60 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:border-emerald-300">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-emerald-500/30 via-green-500/40 to-emerald-500/30 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <span className="text-sm"> {icon} </span>
      <hr className="mx-2 h-4 w-px shrink-0 bg-emerald-300" />
      <AnimatedGradientText
        colorFrom="#059669"
        colorTo="#10b981"
        className="text-sm font-semibold text-emerald-800"
      >
        {title}
      </AnimatedGradientText>
      <ChevronRight
        className="ml-1 size-4 stroke-emerald-600 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
  );
}
