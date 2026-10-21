export default defineAppConfig({
  ui: {
    colors: {
      primary: "neutral",
      neutral: "neutral",
    },
    button: {
      slots: {
        base: "rounded-none font-bold cursor-pointer disabled:opacity-100 aria-disabled:opacity-100",
      },
      variants: {
        size: {
          md: {
            base: "px-3 py-0.5 text-lg gap-1.5",
          },
        },
      },
      compoundVariants: [
        {
          color: "neutral",
          variant: "solid",
          class:
            "text-black bg-neutral-400 hover:bg-neutral-200 active:bg-neutral-200 disabled:bg-neutral-500 aria-disabled:bg-neutral-500 shadow-[inset_0_0_10px_#444] focus-visible:outline-black",
        },
        {
          color: "neutral",
          variant: "ghost",
          class: "text-inherit hover:bg-white/10 active:bg-white/10 focus-visible:outline-white",
        },
      ],
      defaultVariants: {
        color: "neutral",
        variant: "solid",
        size: "md",
      },
    },
  },
});
