import { IconQuote, IconBrandTwitterFilled } from "@tabler/icons-react";
import clsx from "clsx";

const Card = ({ author, content, handleClick }) => {
  const encoded =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + content + '"' + " - " + author);

  console.log(encoded);
  return (
    <div
      id="quote-box"
      className={clsx(
        "flex flex-col w-[80vw] min-h-[250px] justify-center items-center rounded-lg border p-4 gap-2 relative text-md",
        "sm:w-[500px]"
      )}
    >
      <div id="text" className="text-center sm:text-2xl">
        <IconQuote
          size={20}
          fill="black"
          className="inline transform -scale-x-100 sm:hidden"
        />
        <IconQuote
          size={35}
          fill="black"
          className="sm:inline transform -scale-x-100 hidden"
        />
        {content}
      </div>
      <div id="author" className="self-end font-bold">
        -{author}
      </div>
      <button
        id="new-quote"
        className="bg-black text-white text-sm sm:text-md font-bold py-1 px-5 rounded-md relative top-[15px]"
        onClick={handleClick}
      >
        New Quote
      </button>
      <a
        className="absolute bottom-5 right-5"
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
