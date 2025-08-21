import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium shadow-[3.65px_4px_#0f172a] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
  {
    variants: {
      variant: {
        default: // 추가하기
          "border-solid border-2 border-slate-900 bg-slate-200 text-slate-900 active:bg-violet-600 active:text-white",
        secondary: // 수정 완료
          "border-solid border-2 border-slate-900 bg-slate-200 text-slate-900 active:bg-lime-300",
        destructive: // 삭제하기
          "border-solid border-2 border-slate-900 bg-rose-500 text-slate-900",
        flat: "shadow-none", // 평면 버튼
      },
      size: {
        default: "h-14 md:w-[164px] w-[56px] rounded-3xl has-[>svg]:px-3",
        icon: "size-16 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
