import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback } from 'react';

import ArrowBottom from '@assets/svg/arrow-bottom.svg';
import {
  animationBounceArrowBottom,
  arrowPositionBottom,
  atoms,
} from '@styles/sprinkles.css';

interface ArrowProps {
  fullpage: fullpageApi;
  color?: 'black' | 'white';
}

export default function Arrow({
  fullpage,
  color = 'white',
}: ArrowProps): JSX.Element {
  const move = useCallback(() => {
    fullpage.moveSectionDown();
  }, [fullpage]);

  return (
    <div
      onClick={move}
      onKeyPress={move}
      tabIndex={0}
      role="button"
      className={`${atoms({
        zIndex: 1,
        cursor: 'pointer',
        position: 'absolute',
        margin: 'none',
        marginLeft: '-8px',
        padding: 'none',
        width: '16px',
        height: 'xxxs',
        color,
      })} ${animationBounceArrowBottom} ${arrowPositionBottom}`}
    >
      <ArrowBottom />
    </div>
  );
}
