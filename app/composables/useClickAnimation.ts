export const useClickAnimation = () => {
    const {clickAnimation} = useGame();
    const animations = useState<Record<string, [number, number, number]>>(() => ({}));

    return {
        animations,
        playAnimation: (value: number, x: number, y: number) => {
            if (!clickAnimation.value) return;
            const id = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(2, 10);
            animations.value[id] = [value, x, y];
            setTimeout(() => {
                delete animations.value[id];
            }, 1000);
        }
    };
}