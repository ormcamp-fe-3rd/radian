const VideoSection = (): JSX.Element => (
  <div className="video-container">
    <h1>Classic but Electronic</h1>
    <video className="index-video" autoPlay muted loop>
      <source src="/videos/sample-cars-loop-clip.mp4" type="video/mp4" />
    </video>
  </div>
);

export default VideoSection;
