import { fullpageApi } from '@fullpage/react-fullpage';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

import GalleryItem from '@components/GalleryItem';
import LightGalleryItem from '@components/LightGalleryItem';
import { IGallery } from '@interfaces/Gallery';
import { atoms } from '@styles/sprinkles.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  gallery: IGallery;
  fullpage: fullpageApi;
}

export default function Gallery({
  gallery,
  fullpage,
}: GalleryProps): JSX.Element {
  const onAfterOpen = useCallback(() => {
    fullpage.setKeyboardScrolling(false);
    fullpage.setAllowScrolling(false);
  }, [fullpage]);

  const onAfterClose = useCallback(() => {
    fullpage.setKeyboardScrolling(true);
    fullpage.setAllowScrolling(true);
  }, [fullpage]);

  return (
    <div
      className={atoms({
        display: 'grid',
        gridGap: '2px',
        gridColumns: {
          mobile: 'small',
          tablet: 'medium',
          desktop: 'large',
          largeDesktop: 'extraLarge',
        },
      })}
    >
      <LightGallery
        plugins={[lgVideo, lgZoom]}
        elementClassNames={atoms({
          display: 'contents',
        })}
        autoplayFirstVideo={false}
        controls={false}
        download={false}
        gotoNextSlideOnVideoEnd={false}
        loop={false}
        videojs
        // videojsOptions={{ muted: true }}
        mobileSettings={{
          showCloseIcon: true,
        }}
        actualSize={false} // what is this ?
        onAfterOpen={onAfterOpen}
        onAfterClose={onAfterClose}
        // addClass={} // utiliser ca plutot que les globalStyles ?
      >
        {gallery.medias.map((media) => (
          <LightGalleryItem {...media} key={media.id}>
            <GalleryItem
              gallery={media.gallery}
              photo={media.photo}
              key={media.id}
              video={media.video}
            />
          </LightGalleryItem>
        ))}
      </LightGallery>
    </div>
  );
}
