import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' : le site fonctionne quel que soit le nom du dépôt GitHub
// (https://<compte>.github.io/<depot>/). La navigation utilise des liens « #/ »,
// donc aucune configuration serveur n'est nécessaire.
export default defineConfig({
  plugins: [react()],
  base: './',
});
