import "./game-over-modal.css";

export const GameOverModal = () => {
  return (
    <dialog open>
      <section>
        <h1>Game Over</h1>
        <a href="/">Play Again</a>
      </section>
    </dialog>
  );
};
