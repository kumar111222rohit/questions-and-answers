export function debounce(fn: Function, delay: number) {
  let timerID: ReturnType<typeof setTimeout>;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
