import { FC } from "react";
import * as css from "./assets/styles";

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

export const Card: FC<CardProps> = ({ author, title, dates, images }) => (
  <article className={css.container}>
    <h1 className={css.author}>{author}</h1>
    <h2 className={css.title}>{title}</h2>
    <div className={css.dates} data-testid="dateTime">
      Del <time dateTime={dates.initialUTF}>{dates.initialString}.</time> al{" "}
      <time dateTime={dates.finalUTF}>{dates.finalString}.</time>
    </div>
    {images.length && <img className={css.image} src={images[0]} alt="" />}
  </article>
);
