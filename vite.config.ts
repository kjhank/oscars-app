import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import StylelintPlugin from 'vite-plugin-stylelint'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), StylelintPlugin({ include: ['ts', 'tsx']}), tsconfigPaths()],
});
