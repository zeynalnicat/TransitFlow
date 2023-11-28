import servicePlayButton from "../../assets/ServicePage/service-page-play-button.png";
import ReactPlayer from 'react-player';

interface IProps {
    url:string,

}

function VideoPlayer({url}:IProps) {
  return (
    <ReactPlayer
      url={url}
      light
      controls
      playIcon={
          <img src={servicePlayButton} alt="Play"  style={{width:150}}/>
      }
      width="100%"
    />
  );
}

export default VideoPlayer;