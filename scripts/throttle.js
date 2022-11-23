export default function throttle(callback, delay = 0) {
    let isWaiting = false;
    let delayedArgs;

    let timeout = () => {
        if (!delayedArgs) isWaiting = false;
        else {
            callback(...delayedArgs);
            delayedArgs = null;
            setTimeout(timeout, delay)
        }
    }

    return (...args) => {
        if (isWaiting) {
            delayedArgs = args;
            return;
        }

        callback(...args);
        isWaiting = true;
        setTimeout(timeout, delay);
    }
}