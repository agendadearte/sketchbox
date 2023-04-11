import { style } from "typestyle";

type CardProps = {
  author: string;
  title: string;
  dates: {
    initialString: string;
    initialUTF: string;
    finalString: string;
    finalUTF: string;
  };
  images: string[];
};

const cardCss = style({
  padding: ".5rem",
  fontFamily: "Rubik, sans-serif",
});

const authorCss = style({
  marginTop: 0,
  marginBottom: 0,
  fontFamily: "Roboto Slab, serif",
  fontSize: "1.5rem",
  fontWeight: 400,
});

const titleCss = style({
  marginTop: 0,
  marginBottom: ".5rem",
  fontSize: "1rem",
  fontWeight: 300,
  color: "slategrey",
});

const datesCss = style({
  display: "flex",
  alignItems: "center",
  marginBottom: ".5rem",
  fontSize: "1rem",
});

const imageCss = style({
  display: "block",
  width: "100%",
});

export const Card = ({ author, title, dates, images }: CardProps) => (
  <article className={cardCss}>
    <h1 className={authorCss}>{author}</h1>
    <h2 className={titleCss}>{title}</h2>
    <div className={datesCss}>
      <span>
        Del <time dateTime={dates.initialUTF}>{dates.initialString}.</time> al{" "}
        <time dateTime={dates.finalUTF}>{dates.finalString}.</time>
      </span>
    </div>
    {images.length && <img className={imageCss} src={images[0]} alt="" />}
  </article>
);
