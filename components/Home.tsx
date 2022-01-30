/* eslint-disable camelcase */
import { fullpageApi } from '@fullpage/react-fullpage';
// import dynamic from 'next/dynamic';

import Facebook from '@assets/svg/facebook.svg';
import Instagram from '@assets/svg/instagram.svg';
import Logo from '@assets/svg/logo.svg';
import Youtube from '@assets/svg/youtube.svg';
import Arrow from '@components/Arrow';
import LazySource from '@components/LazySource';
import LazyVideo from '@components/LazyVideo';
import { IHome } from '@interfaces/Home';
import { atoms } from '@styles/sprinkles.css';

// const Arrow = dynamic(() => import('@components/Arrow'), {
//   ssr: false,
// });

interface HomeProps {
  home: IHome;
  fullpage: fullpageApi;
}

export default function Home({
  home: { background, facebook, instagram, youtube },
  fullpage,
}: HomeProps): JSX.Element {
  return (
    <>
      <LazyVideo
        autoplay
        muted
        loop
        playsInline
        /* video de basse qualité */
        dataSrc={background.url}
        atom={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          top: 0,
          width: '100%',
          height: 'cent',
          backgroundPosition: 'center center',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <LazySource dataSrc={background.url} type="video/mp4" />
      </LazyVideo>

      <div
        className={atoms({
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        })}
      >
        <Logo
          className={`${atoms({
            color: 'white',
            width: '230px',
          })}`}
        />
        <div
          className={atoms({
            display: 'flex',
            flexDirection: 'row',
            columnGap: '15px',
            width: '230px',
            justifyContent: 'center',
          })}
        >
          <a href={instagram.url} target="_blank" rel="noreferrer">
            <Instagram
              className={`${atoms({
                color: 'white',
                width: '20px',
                height: 'xs',
              })}`}
            />
          </a>
          <a href={youtube.url} target="_blank" rel="noreferrer">
            <Youtube
              className={`${atoms({
                color: 'white',
                width: '20px',
                height: 'xs',
              })}`}
            />
          </a>
          <a href={facebook.url} target="_blank" rel="noreferrer">
            <Facebook
              className={`${atoms({
                color: 'white',
                width: '20px',
                height: 'xs',
              })}`}
            />
          </a>
        </div>
      </div>
      <Arrow fullpage={fullpage} />
    </>
  );
}
