// Bande défilante au-dessus de l'en-tête : le nom de l'église en boucle.
// Le contenu est doublé pour que la boucle soit continue (translateX de -50 %).
// Décorative : le nom est déjà lu dans l'en-tête, donc masquée aux lecteurs d'écran.
const ITEM = ['TURNING POINT CHURCH INTERNATIONAL', 'COTONOU · LOMÉ'];

function Run() {
  return (
    <div className="ticker-run">
      {Array.from({ length: 4 }).flatMap((_, i) =>
        ITEM.map((txt, j) => (
          <span key={`${i}-${j}`} className={j === 0 ? 'tk-name' : 'tk-city'}>
            {txt}<i aria-hidden="true">✦</i>
          </span>
        )),
      )}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track"><Run /><Run /></div>
    </div>
  );
}
