function TruncatedText({ text, maxLength = 100 }) {
    const truncated = text.length > maxLength
      ? text.slice(0, maxLength) + '...'
      : text;
  
    return <p>{truncated}</p>;
  }

  export default TruncatedText;