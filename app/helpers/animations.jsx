export function typingAnimation({$element: $element, wordsArray: wordsArray, defaultPlaceholder: defaultPlaceholder, iterator: iterator}) {
  let startIterator = 0;
  let i = iterator ? iterator : startIterator;
  let isAnimationPaused = $element.data('typingAnimationPaused') === "true";

  if (isAnimationPaused) {
    if ($element.is('input[type=text]')) {
      $element.attr("placeholder", defaultPlaceholder);
    }
  } else {
    if (i < wordsArray.length) {
      if ($element.is('input[type=text]')) {
        $element.attr("placeholder", wordsArray[i]);
      } else {
        $element.html(wordsArray[i]);
      }
      i++;
    } else {
      i = 0;
    }

    setTimeout(() => typingAnimation({$element: $element, wordsArray: wordsArray, defaultPlaceholder: defaultPlaceholder, iterator: i}), 1700);
  }
}

function slideInOnLoad({$element: $element}) {

}
