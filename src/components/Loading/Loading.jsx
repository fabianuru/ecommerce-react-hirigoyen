import { BounceLoader } from "react-spinners"
import "./loading.scss"

const Loading = () => {
  return (
    <div className="loading-screen">
    <BounceLoader  size={75}color={"orange"} />
    </div>
  )
}

export default Loading