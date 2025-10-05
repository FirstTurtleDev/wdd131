// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ---- WEATHER (static inputs for now per spec) ----
// Use either imperial (°F, mph) OR metric (°C, km/h). Here: imperial.
const tempF = 48;        // match what you display in HTML
const windMph = 6;       // match what you display in HTML

// Only compute wind chill if: temp <= 50°F AND wind > 3 mph
function calculateWindChill(tF, vMph) {
  // NWS formula (imperial): 35.74 + 0.6215T - 35.75V^0.16 + 0.4275TV^0.16
  return 35.74 + (0.6215 * tF) - (35.75 * Math.pow(vMph, 0.16)) + (0.4275 * tF * Math.pow(vMph, 0.16));
}

const chillEl = document.getElementById("windChill");
if (tempF <= 50 && windMph > 3) {
  const wc = Math.round(calculateWindChill(tempF, windMph));
  chillEl.textContent = `${wc} °F`;
} else {
  chillEl.textContent = "N/A";
}
