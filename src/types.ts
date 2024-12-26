import type { ImageDataLike } from "gatsby-plugin-image";

export type MdxResponse<T> = {
  allMdx: {
    nodes: T[];
  };
};

export type TattooNode = {
  id: string;
  frontmatter: {
    name: string;
    image: ImageDataLike;
    alt: string;
    artist: string;
    date: string;
    featured: boolean;
  };
};

export type ArtistNode = {
  body: string;
  id: string;
  frontmatter: {
    type: string;
    name: string;
    position: string;
    instagramHandle: string;
    email: string;
    slug: string;
    thumbnail: ImageDataLike;
    img1Alt: string;
    img2Alt: string;
    img3Alt: string;
    img1: ImageDataLike;
    img2: ImageDataLike;
    img3: ImageDataLike;
  };
};

export type FAQ = {
  id: number;
  q: string;
  a: string;
};

export type Field = {
  value: string;
  error: string;
};

export interface Form<T> {
  [key: string]: T;
}

export interface ContactForm<T> extends Form<T> {
  name: T;
  email: T;
  phone: T;
  subject: T;
  message: T;
}
