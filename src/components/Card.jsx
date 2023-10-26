import { IconQuote, IconBrandTwitterFilled } from "@tabler/icons-react";

const Card = ({ author, content, handleClick }) => {
  const encoded =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + content + '"' + " - " + author);

  console.log(encoded);
  return (
    <div
      id="quote-box"
      className="flex flex-col w-[500px] min-h-[250px] justify-center items-center rounded-lg border p-4 gap-2"
    >
      <div id="text" className="text-center text-2xl">
        <IconQuote
          size={40}
          fill="black"
          className="inline transform -scale-x-100"
        />
        {content}
      </div>
      <div id="author" className="self-end font-bold">
        -{author}
      </div>
      <button
        id="new-quote"
        className="bg-black text-white font-bold py-1 px-5 rounded-md"
        onClick={handleClick}
      >
        New Quote
      </button>
      <a
        className="self-end"
        id="tweet-quote"
        title={"Tweet this quote!"}
        target="_top"
        href={encoded}
      >
        <IconBrandTwitterFilled />
      </a>
    </div>
  );
};

export default Card;
