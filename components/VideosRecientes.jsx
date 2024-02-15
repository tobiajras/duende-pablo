import axios from 'axios';

import CarouselEmbla from './CarouselEmbla';
import PlaceholderVideosRecientes from './PlaceholderVideosRecientes';

export async function getYoutubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const apiKey2 = process.env.YOUTUBE_API_KEY_2;
  const duendePlaylist = process.env.YOUTUBE_DUENDEPABLO_PLAYLIST;

  // try {
  //   const response = await axios.get(
  //     `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&maxResults=10`
  //   );
  //   const { data } = response;
  //   return data.items;
  // } catch (err) {
  //   // throw new Error('An error ocurred while fetching the videos: ', err);
  // }

  try {
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${duendePlaylist}&maxResults=10&key=${apiKey2}`
    );

    const { data } = videosResponse;
    return data.items;
  } catch (err) {
    // throw new Error('An error ocurred while fetching the videos: ', err);
  }
}

const VideosRecientes = async () => {
  const videos = await getYoutubeVideos();
  console.log(videos);

  return videos ? (
    <section className='flex flex-col items-center w-full'>
      <CarouselEmbla videos={videos} />
    </section>
  ) : (
    <PlaceholderVideosRecientes />
  );
};

export default VideosRecientes;
