import { IMedia } from '@interfaces/Media';

export interface IGallery {
  name: string;
  medias: IMedia[];
}

export interface IPrismicGalleryData {
  medias: {
    media: {
      id: string | undefined;
    };
  }[];
}
