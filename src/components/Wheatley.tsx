import {motion, useAnimate} from "motion/react";
import {useEffect} from "react";
import {randomNumber} from "@/lib/utils";

export default function Wheatley({onClickAction}: {
    onClickAction: () => void;
}) {

    const [scope, animate] = useAnimate();

    const makeWheatleyMove = () => {
        const useXAxis = Math.random() < 0.5;
        const positivDirection = Math.random() < 0.5;

        const x = useXAxis ? (positivDirection ? 100 : 0) : randomNumber(10, 90);
        const y = useXAxis ? randomNumber(10, 90) : (positivDirection ? 100 : 0);
        const endX = useXAxis ? (positivDirection ? 0 : 100) : randomNumber(10, 90);
        const endY = useXAxis ? randomNumber(10, 90) : (positivDirection ? 0 : 100);
        const rotation = randomNumber(0, 360);
        const delay = randomNumber(25, 45);

        animate(scope.current, {
            x: `calc(${x}vw + ${x - endX}%)`,
            y: `calc(${y}vh + ${y - endY}%)`,
            rotate: `${rotation}deg`,
            opacity: 1
        }, {
            ease: "linear",
            duration: 0
        });

        setTimeout(() => {
            animate(scope.current, {
                x: `calc(${endX}vw + ${endX - x}%)`,
                y: `calc(${endY}vh + ${endY - y}%)`,
                rotate: `${rotation + 360}deg`
            }, {
                ease: "linear",
                duration: 10
            });
            setTimeout(makeWheatleyMove, delay * 1000 + 10000);
        }, 1);
    };

    useEffect(() => {
        setTimeout(makeWheatleyMove, 20000);
    }, []);

    return (
        <motion.img
            src="/wheatley.webp" alt=""
            width={100} height={100}
            className="absolute -translate-1/2 cursor-pointer"
            onClick={onClickAction}
            ref={scope}
            initial={{
                opacity: 0
            }}
            whileTap={{
                scale: 0.9
            }}
            draggable={false}
        />
    );
}