import { atoms, Atoms } from '../styles/sprinkles.css';

interface LazySourceProps {
  atom?: Atoms;
  media?: string;
  dataSrcset?: string;
  type?: string;
  dataSrc?: string;
}

export default function LazySource({
  atom,
  media,
  dataSrcset,
  type,
  dataSrc,
}: LazySourceProps): JSX.Element {
  return (
    <source
      className={atoms({
        ...atom,
      })}
      media={media}
      data-srcset={dataSrcset}
      type={type}
      data-src={dataSrc}
    />
  );
}
