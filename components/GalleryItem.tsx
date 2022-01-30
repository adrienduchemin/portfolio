import Player from '@assets/svg/player.svg';
import { IMedia } from '@interfaces/Media';
import { atoms, playerStyle } from '@styles/sprinkles.css';
import { whitePixel } from '@utils/constants';

import LazyImage from './LazyImage';

interface GalleryItemProps {
  gallery: IMedia['gallery'];
  photo: IMedia['photo'];
  video: IMedia['video'] | null;
}

export default function GalleryItem({
  gallery,
  photo: { alt },
  video,
}: GalleryItemProps): JSX.Element {
  return (
    <>
      {video && (
        <Player
          className={`${atoms({
            position: 'absolute',
            color: 'white',
            width: '60px',
            height: 'ahhh',
            zIndex: 3,
          })} ${playerStyle}`}
        />
      )}
      <LazyImage
        atom={{
          width: '100%',
          display: 'block',
        }}
        dataSrc={gallery.url}
        src={whitePixel}
        alt={alt ?? ''}
      />
    </>
  );
}
