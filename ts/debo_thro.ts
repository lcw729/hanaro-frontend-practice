const debounce = (cb: (...args: unknown[]) => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: unknown[]) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args);
    };
};

const throttle = (cb: (...args: unknown[]) => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null;
    return (...args: unknown[]) => {
        if(timer) return;
        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, delay);
    }
}

const debo = debounce((a) => {
    if (typeof a === 'number')
        console.log(a + 1)
}, 1000);
for (let i = 10; i < 15; i++) debo(i);

const thro = throttle(a => {
    if (typeof a === 'number')
        console.log(a + 1)
}, 1000);
for (let i = 10; i < 15; i++) thro(i);