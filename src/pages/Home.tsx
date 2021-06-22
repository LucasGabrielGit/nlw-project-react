import illustrationImg from "../resources/assets/images/illustration.svg";
import logoImg from "../resources/assets/images/logo.svg";
import logoGoogle from "../resources/assets/images/google-icon.svg";
export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real!</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={logoGoogle} alt="Logo do Google" />
            Crie sua conta com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
