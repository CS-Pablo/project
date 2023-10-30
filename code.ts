import React, { useState } from 'react';

function App() {
  // Déclaration de l'état pour le suivi de l'ouverture/fermeture de la fenêtre
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  // Fonction pour ouvrir la fenêtre
  const openWindow = () => {
    setIsWindowOpen(true);
  };

  // Fonction pour fermer la fenêtre
  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div>
      <h1>Ouvrir une fenêtre en TypeScript</h1>
      <button onClick={openWindow}>Ouvrir la fenêtre</button>

      {isWindowOpen && (
        <div className="window">
          <h2>Fenêtre</h2>
          <p>Contenu de la fenêtre</p>
          <button onClick={closeWindow}>Fermer la fenêtre</button>
        </div>
      )}
    </div>
  );
}

export default App;
