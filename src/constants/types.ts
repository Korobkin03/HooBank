export type NavLinksType = {
  id: string;
  title: string;
};

export type FeaturesType = {
  id: string;
  icon: string;
  title: string;
  content: string;
  index?: number;
};

export type FeedbackType = {
  id?: string;
  content: string;
  name: string;
  title: string;
  img: string;
};

export type StatsType = {
  id: string;
  title: string;
  value: string;
};

export type FooterLinksType = {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
};

export type SocialMediaType = {
  id: string;
  icon: string;
  link: string;
};

export type ClientsType = {
  id: string;
  logo: string;
};
