export interface IPhoto {
  dimensions: { width: number; height: number };
  alt: string | null;
  copyright: string | null;
  url: string;
}
