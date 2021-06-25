import copyImg from "../resources/assets/images/copy.svg";

import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyCode() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyCode}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span># {props.code}</span>
    </button>
  );
}
