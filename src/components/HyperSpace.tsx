"use client";

import {Button} from "@/components/Button";

function Sphere({type}: {
    type: null | "blue" | "orange"
}) {
    return (
        <div
            className={`w-4 h-4 rounded-full ${type === null ? "bg-neutral-600" : type === "blue" ? "bg-blue-400" : "bg-orange-400"} shadow-[inset_0_0_4px_black] transition-colors`}/>
    );
}

export default function HyperSpace({value, onClickAction}: {
    value: number;
    onClickAction: () => void;
}) {

    const isReady = value >= 100;

    return (
        <div
            className="absolute flex flex-col items-center gap-4 left-1/2 top-[calc(50%+150px)] -translate-x-1/2">
            <div className="flex gap-2">
                {Array.from({length: 10})
                    .map((_, i) => <Sphere key={i} type={isReady ? "orange" : value / 100 > i / 10 ? "blue" : null}/>)}
            </div>
            <Button disabled={!isReady} onClick={onClickAction}>Use Hyperspace</Button>
        </div>
    );
}