export const useSplitTexts = (texts: string) => {
  const refs: (HTMLDivElement | null)[] = [];

  const mapLetter = (letter: string, i: number) => (
    <div
      key={`${letter}-${i}`}
      ref={element => refs.push(element)}
      className="inline-block"
    >
      {letter}
    </div>
  );

  const splitLetters = (text: string) => {
    return text.split("").map(mapLetter);
  };

  const components = texts.split(" ").map((text, i) => (
    <div className="inline-block" key={`${text}-${i}`}>
      {splitLetters(text)}
    </div>
  ));

  return {
    components,
    refs
  };
};
