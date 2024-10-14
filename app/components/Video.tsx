
function Video() {
  return (
    <div>
      <video src={require("../../public/HeroVid.mp4")} autoPlay loop muted className="w-full h-full object-cover"></video>
    </div>
  )
}

export default Video
