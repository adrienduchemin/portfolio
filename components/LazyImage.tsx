import { useEffect } from 'react';

import { lazyLoadInstance } from '@utils/lazyload';

import { atoms, Atoms } from '../styles/sprinkles.css';

interface LazyImageProps {
  alt: string;
  dataSrc: string;
  width?: number | string;
  height?: number | string;
  atom?: Atoms;
  src?: string;
}

export default function LazyImage({
  alt,
  atom,
  dataSrc,
  width,
  height,
  src,
}: LazyImageProps): JSX.Element {
  useEffect(() => {
    lazyLoadInstance?.update();
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`lazy ${atoms({
        ...atom,
      })}`}
      alt={alt}
      data-src={dataSrc}
      src={src}
      width={width}
      height={height}
    />
  );
}
