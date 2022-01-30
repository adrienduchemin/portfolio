import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  m: '12px',
  large: '14px',
  l: '16px',
  xl: '28px',
};

const height = {
  xxxs: '16px',
  xxs: '30px',
  xs: '30px',
  ahhh: '60px',
  sm: '100px',
  small: '150px',
  medium: '80%',
  cent: '100%',
  centvh: '100vh',
  avh: '70vh',
  auto: 'auto',
  fit: 'fit-content',
};

const margin = {
  auto: '0 auto',
  4: '0 4px',
  8: '0 8px',
  none: 0,
};

const repeat = {
  small: 'repeat(2, 1fr)',
  medium: 'repeat(3, 1fr)',
  large: 'repeat(3, 1fr)',
  extraLarge: 'repeat(4, 1fr)',
};

const responsiveStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 992px)' },
    largeDesktop: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    border: ['solid', '5px solid'],
    borderColor: ['white', 'black'],
    borderRadius: ['50%', '3px', '100px', '30px', '25px', '100%'],
    cursor: ['pointer'],
    display: [
      'none',
      'flex',
      'inline-block',
      'block',
      'inline',
      'grid',
      'contents',
      'table',
      'table-cell',
      'inline-flex',
    ],
    whiteSpace: ['nowrap'],
    height,
    minWidth: ['100%'],
    minHeight: ['100%', '20px'],
    maxWidth: ['100%'],
    maxHeight: ['100%', '100vh', '50px'],
    stroke: ['#fff'],
    strokeWidth: ['2px'],
    strokeDasharray: [778],
    strokeDashoffset: [778],
    fontSize: [0, '16px', '25px', 'large'],
    lineHeight: [0, '25px'],
    fontWeight: ['bold', 300],
    fontFamily: ['inherit'],
    margin,
    flexDirection: ['row', 'column'],
    rowGap: ['40px'],
    columnGap: ['15px'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    objectFit: ['scale-down', 'cover', 'fill', 'contain'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['center'],
    paddingTop: space,
    paddingBottom: space,
    marginLeft: ['auto', '-8px'],
    marginBottom: ['15px'],
    marginRight: ['auto', '15px'],
    marginTop: ['-8px', '30px', '10px', '50px'],
    paddingLeft: space,
    paddingRight: space,
    listStyle: ['none'],
    gridTemplateColumns: repeat,
    verticalAlign: ['middle'],
    width: [
      '100%',
      '60px',
      '150px',
      '230px',
      'auto',
      '100vw',
      '100px',
      '30px',
      '20px',
      '16px',
    ],
    backdropFilter: ['blur(10px)'],
    textAlign: ['center'],
    outline: ['none'],
    transform: [
      'scale(0)',
      'scale(0.8)',
      'scale(1.8)',
      'scale(1)',
      'translate(-50%, -50%)',
      'translateX(-50%) translateY(-50%)',
      'translate3d(0, 0, 0)',
    ],
    filter: ['blur(10px)'],
    opacity: [0, 1, 0.7],
    visibility: ['hidden', 'visible'],
    position: ['fixed', 'absolute', 'relative', 'sticky'],
    zIndex: [3, 4, 5, 6, -9, -10, -1, 0, 1, 999],
    top: ['50%', '50vh', '20px', 0],
    left: ['50%', '50vh', '20px', 0],
    bottom: [0, '20px'],
    right: [0, '20px'],
    overflow: ['hidden'],
    backgroundPosition: ['center center'],
    backgroundSize: ['100% 100%', 'contain', '0 auto'],
    backgroundImage: ["url('/arrow.svg')"],
    backgroundRepeat: ['no-repeat'],
    gridGap: ['2px'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    gridColumns: ['gridTemplateColumns'],
  },
});

const galleryStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 992px)' },
    largeDesktop: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    gridTemplateColumns: repeat,
  },
});

const colors = {
  black: 'black',
  white: 'white',
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  overlay: 'rgba(0, 0, 0, 0.5)',
  zero: 'rgba(0, 0, 0, 0)',
  transparent: 'transparent',
};

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    backgroundColor: colors,
    fill: colors,
    // etc.
  },
});

globalStyle(`*`, {
  boxSizing: 'border-box',
});

globalStyle(`html, body`, {
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
});

globalStyle(`.iScrollVerticalScrollbar`, {
  display: 'none',
});

globalStyle(`img:not([src]):not([srcset])`, {
  visibility: 'hidden',
});

globalStyle(`img:-moz-loading`, {
  visibility: 'hidden',
});

globalStyle(`img.lazy`, {
  opacity: 0,
});

globalStyle(`img:not(.initial)`, {
  transition: 'opacity 1.5s',
});

globalStyle(`img.initial, img.loaded, img.error`, {
  opacity: 1,
});

globalStyle(`.lg-backdrop`, {
  background: 'rgba(0, 0, 0, 0.5)',
});

globalStyle(`.lg-media-overlap .lg-sub-html`, {
  background: 'rgba(0, 0, 0, 0.3)',
});

export const atoms = createAtomsFn(
  responsiveStyles,
  colorStyles,
  galleryStyles,
);
export type Atoms = Parameters<typeof atoms>[number];

const bounceBottom = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(10px)',
  },
});

const bounceTop = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(-10px)',
  },
});

const bounceLeft = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(-10px)',
  },
});

const bounceRight = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(+10px)',
  },
});

export const animationBounceArrowBottom = style({
  // animation: `${bounceBottom} 2s infinite`,
  animation: `${bounceBottom} 0.4s ease 0s alternate infinite`,
});

export const animationBounceArrowTop = style({
  animation: `${bounceTop} 0.4s ease 0s alternate infinite`,
});

export const animationBounceArrowLeft = style({
  animation: `${bounceLeft} 0.4s ease 0s alternate infinite`,
});

export const animationBounceArrowRight = style({
  animation: `${bounceRight} 0.4s ease 0s alternate infinite`,
});

export const playerStyle = style({
  // left: calc('50%').subtract('30px').toString(),
  // top: calc('50%').subtract('30px').toString(),
  left: '15px',
  top: '15px',
});

export const firstDotStyle = style({
  left: calc('50%').subtract('12px').subtract('50px').toString(),
});

export const secondDotStyle = style({
  left: calc('50%').subtract('12px').toString(),
});

export const thirdDotStyle = style({
  left: calc('50%').subtract('12px').add('50px').toString(),
});

export const dotStyle = style({
  top: calc('100%').subtract('16px').subtract('30px').toString(),
});

export const dotActiveStyle = style({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
});

export const arrowPositionBottom = style({
  top: calc('100%').subtract('16px').subtract('30px').toString(),
  // bottom: '30px',
  left: '50%',
});

export const arrowPositionTop = style({
  top: '30px',
  left: '50%',
});

export const arrowPositionLeft = style({
  top: '50%',
  left: '15px',
});

export const arrowPositionRight = style({
  top: '50%',
  right: '15px',
});

export const menuLi = style({
  '::before': {
    content: ' ',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    transition: '0.2s',
    borderRadius: '25px',
  },
  ':hover': {
    color: 'black',
    background: 'linear-gradient(to bottom, #e8edec, #d2d1d3)',
    boxShadow: '0px 3px 20px 0px black',
    transform: 'scale(1.2)',
  },
});
