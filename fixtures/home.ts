import { IHome } from '../interfaces/Home';

export async function getHomeFixture(): Promise<IHome> {
  return new Promise((resolve) => {
    resolve({
      description: 'Danseuse',
      background: {
        url: '/danse.mp4', // video de basse qualite qui se charge vite
      },
      facebook: {
        url: 'https://www.facebook.com/100072408039106',
      },
      instagram: {
        url: 'https://www.instagram.com/laisbeunardeau',
      },
      youtube: {
        url: 'https://www.youtube.com/channel/UCBAuuQAtJl1Q4Q9J0wImUrw',
      },
    });
  });
}
