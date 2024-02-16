import axios from 'axios';

import CarouselEmbla from './CarouselEmbla';
import PlaceholderVideosRecientes from './PlaceholderVideosRecientes';

export async function getYoutubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const duendePlaylist = process.env.YOUTUBE_DUENDEPABLO_PLAYLIST;

  try {
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${duendePlaylist}&maxResults=10&key=${apiKey}`
    );

    const { data } = videosResponse;
    return data.items;
  } catch (err) {
    // throw new Error('An error ocurred while fetching the videos: ', err);
  }
}

export async function getYoutubeVideosGaming() {
  const apiKey2 = process.env.YOUTUBE_API_KEY_2;
  const duendePlaylistGaming = process.env.YOUTUBE_DUENDEGAMING_PLAYLIST;

  try {
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${duendePlaylistGaming}&maxResults=10&key=${apiKey2}`
    );

    const { data } = videosResponse;
    return data.items;
  } catch (err) {
    // throw new Error('An error ocurred while fetching the videos: ', err);
  }
}

const VideosRecientes = async () => {
  const videos = await getYoutubeVideos();
  const videosGaming = await getYoutubeVideosGaming();
  // console.log(videos);

  return videos && videosGaming ? (
    <section className='flex flex-col items-center w-full'>
      <CarouselEmbla titulo='Duende Pablo' videos={videos} opcion={1} />
      <CarouselEmbla titulo='Duende Gaming' videos={videosGaming} opcion={2} />
    </section>
  ) : (
    <PlaceholderVideosRecientes />
  );
};

export default VideosRecientes;
