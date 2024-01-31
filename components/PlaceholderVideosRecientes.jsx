"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " años";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " días";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " horas";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutos";
  }
  return Math.floor(seconds) + " segundos";
}

const PlaceholderVideosRecientes = () => {
  const videos = [
    {
      kind: "youtube#searchResult",
      etag: "86FXBMGIMASwiCh2cLgXl1aSEXg",
      id: { kind: "youtube#video", videoId: "tTUG0nu3R8M" },
      snippet: {
        publishedAt: "2024-01-28T17:49:56Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "MILEI Y LOS OBJETIVOS DE SU GOBIERNO",
        description:
          "Milei responde a las preguntas con respecto a la ley Ómnibus y los cambios que desea hacer en Argentina Seguime en las ...",
        thumbnails:
          "https://i.ytimg.com/vi/tTUG0nu3R8M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1wFD3HCOjqexuDB2O1PDxgS3DZg",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-28T17:49:56Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "zwQBFObuV46dLvtGZ3aryK6MRwE",
      id: { kind: "youtube#video", videoId: "9K8-KN38Z_A" },
      snippet: {
        publishedAt: "2024-01-27T23:19:03Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "DEJÓ LAS COSAS EN CLARO BUKELE EN LA ONU",
        description:
          "En un discurso en la ONU Bukele deja muy en claro sus intenciones y el funcionamiento de las redes sociales Seguime en las ...",
        thumbnails:
          "https://i.ytimg.com/vi/9K8-KN38Z_A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg5Ra07ces5Ki4a4wnVH8ydrYzIw",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-27T23:19:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "fuumN874XPqXdOJhV0tkA6gRbN4",
      id: { kind: "youtube#video", videoId: "WwmJfWru85Y" },
      snippet: {
        publishedAt: "2024-01-27T15:43:10Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "RECORTARON LA LEY ÓMNIBUS",
        description:
          "El día de ayer el ministro Caputo anuncio alguno de los recortes que se tuvieron que hacer en la ley omnibus Seguime en las ...",
        thumbnails:
          "https://i.ytimg.com/vi/WwmJfWru85Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh4u8x-PdZTUkcoQ7Hku_IUtyj0Q",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-27T15:43:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "mEveP_wxmCMfGgvu4-L3Pv3OTB8",
      id: { kind: "youtube#video", videoId: "mGRsZ7ievM4" },
      snippet: {
        publishedAt: "2024-01-26T17:12:53Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "LA SITUACION QUE CASI DESBORDA A BUKELE",
        description:
          "Discurso de Bukele donde arremete contra todos Seguime en las redes: https://www.twitch.tv/duendepablo/ ...",
        thumbnails:
          "https://i.ytimg.com/vi/mGRsZ7ievM4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCReb1DfFIOSAAz6Jvn7oOh0opWjQ",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-26T17:12:53Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "L5XmUhILjbsl-TSmsCV8pP1B09U",
      id: { kind: "youtube#video", videoId: "F_92gi-q9zM" },
      snippet: {
        publishedAt: "2024-01-25T17:59:27Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "PASO DE TODO EN EL PARO NACIONAL",
        description:
          "Vemos lo que nos dejo el paro nacional Seguime en las redes: https://www.twitch.tv/duendepablo/ ...",
        thumbnails:
          "https://i.ytimg.com/vi/F_92gi-q9zM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHbrAHASChpeHhzBdlxa1VPxmk3g",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-25T17:59:27Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "tdwMTn24a87tdnASyolKx5ecjus",
      id: { kind: "youtube#video", videoId: "7yhd5_TChiE" },
      snippet: {
        publishedAt: "2024-01-24T18:24:57Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "FANTINO ESTALLA CONTRA EL PERONISMO",
        description:
          "Duende reacciona a la entrevista que tuvo Fantino con Berni Seguime en las redes: https://www.twitch.tv/duendepablo/ ...",
        thumbnails:
          "https://i.ytimg.com/vi/7yhd5_TChiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNrAvj5pRUO6R0EfyNPhlqt8kg0Q",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-24T18:24:57Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "zzPy5td3FcJSeosElGRaAoowye8",
      id: { kind: "youtube#video", videoId: "pGOWEKfvkhk" },
      snippet: {
        publishedAt: "2024-01-23T16:00:35Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title:
          "BRUTALES CONTESTACIONES DE BUKELE A DIPLOMATICOS DE EUROPA Y CANADÁ",
        description:
          "Segunda parte de la cadena nacional que realizó Bukele y esta vez unos va a dejar con la boca abierta Seguime en las redes: ...",
        thumbnails:
          "https://i.ytimg.com/vi/pGOWEKfvkhk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy9zLgOnluPqjgxh5A5oglKupgNQ",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-23T16:00:35Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "ZLKNQ1C2JQY69D1rODqTWTp8Rjo",
      id: { kind: "youtube#video", videoId: "67YeS-3IVCs" },
      snippet: {
        publishedAt: "2024-01-22T16:33:45Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "SIEMPRE IMPRESIONA BUKELE - PRESIDENTE EL SALVADOR",
        description:
          "Bukele da una cadena nacional donde están invitados varios diplomaticos de todo el mundo. Seguime en las redes: ...",
        thumbnails:
          "https://i.ytimg.com/vi/67YeS-3IVCs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfeiR7Hc0YL0RCHO0uEnSs84qwfA",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-22T16:33:45Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Rw377OKzMzr8BhzP5aHswQcbdqY",
      id: { kind: "youtube#video", videoId: "s4hADm91Bls" },
      snippet: {
        publishedAt: "2024-01-21T20:28:10Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "TE SORPRENDERÁ  LA CONCENTRACIÓN  DE BUKELE EN ESTA ENTREVISTA",
        description:
          "Bukele nuevamente cara a cara con Moises Urbina Seguime en las redes: https://www.twitch.tv/duendepablo/ ...",
        thumbnails:
          "https://i.ytimg.com/vi/s4hADm91Bls/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ5Lp7z_SQWRJRgOHQ5spNlGuzRg",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-21T20:28:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "cC_GyV_XWc80Pm6kVmKr3uV06Wo",
      id: { kind: "youtube#video", videoId: "K2scnoYHAMY" },
      snippet: {
        publishedAt: "2024-01-20T16:53:54Z",
        channelId: "UCjhy7RmjZ9fcC-HgbVa4ZaA",
        title: "LA EXTRAÑA CARTA DOCUMENTO QUE RECIBIO MANUEL ADORNI",
        description:
          "Le mandan carta documento a Adorni y responde algunas inquietudes de los periodistas Seguime en las redes: ...",
        thumbnails:
          "https://i.ytimg.com/vi/K2scnoYHAMY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCq-Alk9PGZPlCdEcyUKVS-V_H0Q",
        channelTitle: "Duende",
        liveBroadcastContent: "none",
        publishTime: "2024-01-20T16:53:54Z",
      },
    },
  ];
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <div className='max-w-6xl m-10 mb-20'>
      <div className='overflow-hidden ' ref={emblaRef}>
        <div className='flex gap-10'>
          {videos.map((video) => (
            <div key={video.id.videoId} className='flex flex-[0_0_23%]'>
              <Link
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className=' object-cover object-center rounded-lg'
                  src={video.snippet.thumbnails}
                  alt={video.snippet.title}
                  width={1200}
                  height={675}
                />
                <div className='mt-3'>
                  <h2 className='text-text-primary text-sm line-clamp-2'>
                    {video.snippet.title}
                  </h2>
                </div>
                <div className='flex gap-2 items-center mt-2'>
                  <div className='flex items-center gap-2'>
                    <Image
                      className='rounded-full'
                      alt='canal-duende-pablo'
                      src='/assets/canal-duende-pablo.webp'
                      width={25}
                      height={25}
                    />
                    <span className='text-xs'>Duende Pablo</span>
                  </div>
                  <span className='text-xs'>
                    • hace {timeSince(video.snippet.publishTime)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderVideosRecientes;
