import { IMedia } from '@interfaces/Media';

import { IGallery } from '../interfaces/Gallery';

export async function getGalleriesFixture(
  numberOfItems: number,
): Promise<IGallery> {
  return new Promise((resolve) => {
    resolve(generateGalleryItems(numberOfItems));
  });
}

function generateGalleryItems(numberOfItems: number): IGallery {
  const gallery: IGallery = { name: 'gallery', medias: [] };

  for (let i = 1; i < numberOfItems; i++) {
    const isVideo = Math.random() < 0.3;

    const media: IMedia = {
      photo: {
        dimensions: { width: 1440, height: 700 }, // pas utiles: appelées dans le slider en full
        alt: 'dancer',
        copyright: 'Duch Photography',
        url: isVideo ? '/chat.png' : '/chat.jpeg',
      },
      gallery: {
        dimensions: { width: 400, height: 400 }, // a titre indicatif
        alt: 'dancer',
        copyright: 'Duch Photography',
        url: '/chat.jpg',
      },
      video: isVideo
        ? Math.random() < 0.5
          ? {
              url: 'https://www.youtube.com/watch?v=MGLFsxznv3U',
              type: 'Web',
            }
          : { url: '/video.mp4', type: 'Media' }
        : null,
      id: `${isVideo ? 'video' : 'photo'}-${i}`,
    };

    gallery.medias.push(media);
  }

  return gallery;
}
