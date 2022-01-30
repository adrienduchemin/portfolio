import { IMedia } from '@interfaces/Media';
import { atoms } from '@styles/sprinkles.css';

interface LightGalleryItemProps extends IMedia {
  children: JSX.Element;
}

export default function LightGalleryItem({
  photo,
  video,
  id,
  children,
}: LightGalleryItemProps): JSX.Element {
  return (
    <div
      className={`item ${atoms({
        cursor: 'pointer',
      })} ${
        video
          ? atoms({
              position: 'relative',
              display: 'inline-block',
            })
          : ''
      }`}
      data-slide-name={id}
      data-src={!video ? photo.url : undefined}
      data-video={getVideoParams(video)}
      data-poster={video ? photo.url : undefined}
      data-sub-html={`<h4>© ${photo.copyright ?? 'Lais Beunardeau'}</h4>`}
    >
      {children}
    </div>
  );
}

function getVideoParams(video: IMedia['video']): string | undefined {
  if (!video) return undefined;

  // JSON parse and stringify instead of this
  return `{"source": [{"src":"${video.url}", "type":"video/${
    video.type === 'Web' ? 'youtube' : 'mp4'
  }"}], "attributes": {"preload": true, "controls": true}, "techOrder": ["${
    video.type === 'Web' ? 'youtube' : 'html5'
  }"], "youtube": {"ytControls": 0}}`;
}
