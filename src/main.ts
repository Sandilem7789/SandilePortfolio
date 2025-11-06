// main.ts
import './style.css'


const agentId = import.meta.env.VITE_AGENT_ID;
const container = document.getElementById("agent-widget");

if (container && agentId) {
  container.innerHTML = `
    <elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>
    <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
  `;
}



// Optional: log when the page is ready
window.addEventListener('DOMContentLoaded', () => {
  console.log('Sandile Portfolio Agent loaded.')

  // You can add custom logic here later, like:
  // - Tracking agent interactions
  // - Animating intro text
  // - Handling fallback behavior
})
