import NumberFlow from "@number-flow/react";

export default function Score({value}: {
    value: number;
}) {
    return (
        <NumberFlow
            className="absolute top-[calc(50%-200px)] left-1/2 -translate-x-1/2 text-orange-300 text-4xl text-center font-bold font-mono drop-shadow-[0_0_10px_var(--color-orange-300)] drop-shadow-amber-50"
            value={value}/>
    );
}