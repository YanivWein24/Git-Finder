export type UserData = {
  id: number;
  name: string;
  userName: string;
  imageUrl: string;
  joinedAt: string;
  bio: string;
  publicRepos: string;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter: string;
  company: string;
  repos: number;
  link: string
};

export type RepoType = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  watchers: number;
  forks: number;
}