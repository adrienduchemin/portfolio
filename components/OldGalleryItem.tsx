import { IOldMedia } from '@interfaces/Media';
import { whitePixel } from '@utils/constants';

import LazyImage from './LazyImage';
import LazySource from './LazySource';

interface GalleryItemProps {
  photo: IOldMedia['photo'];
}

export default function GalleryItem({
  photo: {
    alt,
    galleryLargeDesktop,
    galleryDesktop,
    galleryMobile,
    galleryTablet,
  },
}: GalleryItemProps): JSX.Element {
  return (
    <picture>
      {/* large desktop > 1200  */}
      <LazySource
        media="(min-width: 1200px)"
        dataSrcset={galleryLargeDesktop.url}
      />
      {/* desktop 992 < x <= 1200 */}
      <LazySource media="(min-width: 992px)" dataSrcset={galleryDesktop.url} />
      {/* tablet 768 < x <= 992 */}
      <LazySource media="(min-width: 768px)" dataSrcset={galleryTablet.url} />
      <LazyImage
        atom={{
          width: '100%',
          // objectFit: 'fill', // not usefull for now
          display: 'block',
        }}
        /* mobile <= 768 */
        dataSrc={galleryMobile.url}
        /* placeholder */
        src={whitePixel}
        alt={alt ?? ''}
      />
    </picture>
  );
}
