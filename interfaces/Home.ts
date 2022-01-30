import { IText } from '@interfaces/Text';

export interface IHome {
  description: string;
  background: {
    url: string; // pour l'instant on ne prend que les mp4
  };
  facebook: {
    url: string;
  };
  instagram: {
    url: string;
  };
  youtube: {
    url: string;
  };
}

export interface IPrismicHomeData {
  description: IText;
  background: {
    url: string; // pour l'instant on ne prend que les mp4
  };
  facebook: {
    url: string;
  };
  instagram: {
    url: string;
  };
  youtube: {
    url: string;
  };
}
