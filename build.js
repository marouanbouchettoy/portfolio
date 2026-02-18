const fs = require("fs");
const path = require("path");

// Read your HTML file
let html = fs.readFileSync("index.html", "utf8");

// Replace the placeholder with the actual token from Netlify
// IMPORTANT: The token will be embedded in the frontend - visible to anyone!
// Only use this for public GitHub API calls with appropriate token restrictions
html = html.replace("__GITHUB_TOKEN__", process.env.GITHUB_TOKEN || "");

// Create a dist folder if it doesn't exist
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

// Write the processed file to dist folder
fs.writeFileSync("dist/index.html", html);
console.log("✅ Build complete - token injected");
