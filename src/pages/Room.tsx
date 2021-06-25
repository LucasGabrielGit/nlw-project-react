import { Button } from "../components/Button";
import { useParams } from "react-router-dom";
import { RoomCode } from "../components/RoomCode";
import logoImg from "../resources/assets/images/logo.svg";
import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";

import "../styles/room.scss";
import { database } from "../services/firebase";
import toast, { Toaster } from "react-hot-toast";
type RoomsParams = {
  id: string;
};
export function Room() {
  const params = useParams<RoomsParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const { user } = useAuth();
  const roomId = params.id;

  const errorToast = () => {
    toast.error("You must be logged in.", {
      duration: 2000,
      ariaProps: {
        role: "alert",
        "aria-live": "polite",
      },
      style: {
        height: "48px",
        width: "240px",
        background: "rgb(0,132,255)",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0,132,255,0.4)",
      },
    });
  };
  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      return errorToast();
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetmeAsk" />
          <RoomCode code={params.id} />
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 pergunta(as)</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            <span>
              Para enviar uma pergunta é necessário{" "}
              <button>realizar o login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
            <Toaster />
          </div>
        </form>
      </main>
    </div>
  );
}
