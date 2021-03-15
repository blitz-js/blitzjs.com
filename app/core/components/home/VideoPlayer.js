import ReactPlayer from "react-player"

const VideoPlayer = ({url, className = ""}) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className={`react-player ${className}`}
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  )
}

export {VideoPlayer}
