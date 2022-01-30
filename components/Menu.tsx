import { Dispatch, SetStateAction, useCallback } from 'react';

import { IGallery } from '@interfaces/Gallery';

interface GalleryProps {
  galleries: IGallery[];
  setCurrentGallery: Dispatch<SetStateAction<IGallery>>;
}

export default function Menu({
  galleries,
  setCurrentGallery,
}: GalleryProps): JSX.Element {
  const handleChangeGallery = useCallback(
    (name: string) => {
      setCurrentGallery(galleries.find((g) => g.name === name)!);
    },
    [galleries, setCurrentGallery],
  );

  return (
    <div>
      {galleries.map((gallery) => (
        <button
          type="button"
          key={gallery.name}
          onClick={() => handleChangeGallery(gallery.name)}
        >
          {gallery.name}
        </button>
      ))}
    </div>
  );
  // return (
  //   <>
  //     <input type="checkbox" id="active" />
  //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //     <label htmlFor="active" className="menu-btn">
  //       <span />
  //     </label>
  //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //     <label htmlFor="active" className="close" />
  //     <div className="wrapper">
  //       <ul>
  //         {galleries.map((gallery) => (
  //           <li key={gallery.name}>
  //             {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events */}
  //             <a onClick={() => handleChangeGallery(gallery.name)}>Home</a>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </>
  // );
}
