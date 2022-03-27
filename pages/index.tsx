import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';

import FullPage from '@components/FullPage';
import { IGallery, IPrismicGalleryData } from '@interfaces/Gallery';
import { IHome, IPrismicHomeData } from '@interfaces/Home';
import { IMedia, IPrismicMediaData } from '@interfaces/Media';
import { client } from '@utils/prismic';

import { getGalleriesFixture } from '../fixtures/galleries';
import { getHomeFixture } from '../fixtures/home';

interface IndexProps {
  home: IHome;
  gallery: IGallery;
}

export default function Index(props: IndexProps): JSX.Element {
  return <FullPage {...props} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const [home, gallery] = await Promise.all([getHome(), getGalleries()]);

  return {
    props: {
      home,
      gallery,
    },
  };
};

async function getHome(): Promise<IHome> {
  if (process.env.OFFLINE === 'true') return getHomeFixture();

  const prismicHome = await client.getSingle('home', {});
  const data = prismicHome.data as unknown as IPrismicHomeData;

  return {
    ...data,
    description: data.description[0]?.text ?? '',
  };
}

async function getGalleries(): Promise<IGallery> {
  if (process.env.OFFLINE === 'true') {
    return getGalleriesFixture(80);
  }

  const prismicGallery = await client.getByUID('gallery', 'gallery');

  const gallery = await getGallery(prismicGallery);

  return gallery;
}

async function getGallery(document: PrismicDocument): Promise<IGallery> {
  const data = document.data as unknown as IPrismicGalleryData;

  const newMedias = await Promise.all(
    data.medias.map(async (media) => getMedia(media)),
  );

  const medias = newMedias.filter((newMedia) => newMedia) as IMedia[];

  return {
    medias,
    name: document.uid!,
  };
}

async function getMedia(
  media: IPrismicGalleryData['medias'][number],
): Promise<IMedia | undefined> {
  if (!media.media.id) {
    return undefined;
  }

  const prismicMedia = await client.getByID(media.media.id, {
    lang: 'fr-fr',
  });

  const data = prismicMedia.data as unknown as IPrismicMediaData;

  const { gallery, ...photo } = data.photo;

  return {
    id: prismicMedia.id,
    photo,
    gallery,
    video: data.video.url
      ? { type: data.video.link_type!, url: data.video.url }
      : null,
  };
}
