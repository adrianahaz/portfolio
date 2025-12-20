
import { router } from "./router.js";

// Initial render
router();

// Handle browser back/forward navigation
window.addEventListener("popstate", () => {
  router();
});
