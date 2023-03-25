function VimeoPlayer({ videoId }) {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}`}
      width='640'
      height='360'
      allow='autoplay; fullscreen'
      allowFullScreen></iframe>
  );
}

export default VimeoPlayer;
