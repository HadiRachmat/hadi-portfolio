import { useEffect, useState } from 'react';

const TypingText = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingIn = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingIn);
      }
    }, speed);

    return () => {
      clearInterval(typingIn);
    };
  }, [text, speed]);

  return displayText;
}


 const TypeText = ({text, speed}) => {
   const displayText = TypingText(text, speed);
   return <p>{displayText}</p>
}

export default TypeText;
