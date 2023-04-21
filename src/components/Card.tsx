import { style } from "typestyle";
import * as tokens from "@agendadearte/palette";

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
});

const authorCss = style({
  marginTop: 0,
  marginBottom: 0,
  fontSize: "1.5rem",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 400,
  color: `var(--color-primary-dark, ${tokens.ColorPrimaryDark})`,
});

const titleCss = style({
  marginTop: 0,
  marginBottom: ".5rem",
  fontSize: "1.2rem",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 300,
  color: `var(--color-primary-light, ${tokens.ColorPrimaryLight})`,
});

const datesCss = style({
  marginBottom: ".5rem",
  fontSize: "1rem",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 400,
  color: `var(--color-primary-base, ${tokens.ColorPrimaryBase})`,
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
