// import CheckBoxAssesment from './assesmentComponents/CheckBoxAssesment';
// import DropdownAssesment from './assesmentComponents/DropdownAssesment'
import { Grid } from '@mui/material';
import RadioButtonAssesment from './assesmentComponents/RadioButtonAssesment'
import TextFieldAssesment from './assesmentComponents/TextFieldAssesment';
import Header from './deepak/media';
import useVideoPlayer from './deepak/Video player';
function App() {
  return (
     {/* <CheckBoxAssesment/> */}
     {/* <RadioButtonAssesment/> */}
     {/* <TextFieldAssesment/> */}
     
       const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={videoFile}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        >

        </video>
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className="bx bxs-volume-full"></i>
            ) : (
              <i className="bx bxs-volume-mute"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
      
  );
}

export default App;
