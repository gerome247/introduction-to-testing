// vite.config.ts
import { defineConfig } from "file:///Users/geromeo/Code/master.dev/introduction-to-testing/node_modules/vite/dist/node/index.js";
import react from "file:///Users/geromeo/Code/master.dev/introduction-to-testing/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { css } from "file:///Users/geromeo/Code/master.dev/introduction-to-testing/packages/css-configuration/index.js";
var PORT = process.env.PORT || 3e3;
var vite_config_default = defineConfig({
  plugins: [react()],
  css,
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
        secure: false
      }
    }
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["@testing-library/jest-dom/vitest"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ2Vyb21lby9Db2RlL21hc3Rlci5kZXYvaW50cm9kdWN0aW9uLXRvLXRlc3RpbmcvZXhhbXBsZXMvdGFzay1saXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZ2Vyb21lby9Db2RlL21hc3Rlci5kZXYvaW50cm9kdWN0aW9uLXRvLXRlc3RpbmcvZXhhbXBsZXMvdGFzay1saXN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9nZXJvbWVvL0NvZGUvbWFzdGVyLmRldi9pbnRyb2R1Y3Rpb24tdG8tdGVzdGluZy9leGFtcGxlcy90YXNrLWxpc3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdjc3MtY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgY3NzLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWAsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdoYXBweS1kb20nLFxuICAgIHNldHVwRmlsZXM6IFsnQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbS92aXRlc3QnXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2WSxTQUFTLG9CQUFvQjtBQUMxYSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxXQUFXO0FBRXBCLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUVqQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVEsb0JBQW9CLElBQUk7QUFBQSxRQUNoQyxjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsa0NBQWtDO0FBQUEsRUFDakQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
