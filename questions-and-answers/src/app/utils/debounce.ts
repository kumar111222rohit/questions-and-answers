export function debounce(fn: Function, delay: number) {
  let timerID: ReturnType<typeof setTimeout>;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}