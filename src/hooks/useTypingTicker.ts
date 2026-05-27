import { useEffect, useRef, useState } from "react";

export function useTypingTicker(words: readonly string[]) {
  const [text, setText] = useState("");
  const state = useRef({ i: 0, j: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = state.current;
      const word = words[s.i];
      if (s.deleting) {
        setText(word.slice(0, s.j));
        s.j -= 1;
      } else {
        setText(word.slice(0, s.j));
        s.j += 1;
      }

      let delay = s.deleting ? 30 : 70;
      if (!s.deleting && s.j === word.length + 1) {
        s.deleting = true;
        delay = 1400;
      } else if (s.deleting && s.j === -1) {
        s.deleting = false;
        s.i = (s.i + 1) % words.length;
        s.j = 0;
        delay = 220;
      }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
