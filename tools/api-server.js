#!/usr/bin/env node
// Minimal API server (no dependencies) to expose the current email HTML
// GET /api/email -> { subject, html, path, updatedAt }

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5600;
const EMAIL_PATH = process.env.EMAIL_PATH || path.resolve(__dirname, '..', 'kimi-vs-code-optimized-email-final.html');

function send(res, status, body, headers = {}) {
  const base = { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' };
  res.writeHead(status, { ...base, ...headers });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/api/email') {
    fs.readFile(EMAIL_PATH, 'utf8', (err, html) => {
      if (err) return send(res, 500, { error: 'Failed to read email HTML', detail: String(err), path: EMAIL_PATH });
      const subject = 'Visum- & Versicherungs– Anfrage';
      const stats = fs.statSync(EMAIL_PATH);
      send(res, 200, { subject, html, path: EMAIL_PATH, updatedAt: stats.mtime.toISOString() });
    });
    return;
  }
  // small help index
  if (url.pathname === '/' || url.pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<html><body style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding:16px">\
      <h3>Email API</h3>\
      <p>GET <code>/api/email</code> → JSON with { subject, html, path, updatedAt } for the current email at:<br><code>${EMAIL_PATH}</code></p>\
      <p>Set <code>PORT</code> or <code>EMAIL_PATH</code> env vars to change defaults.</p>\
    </body></html>`);
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`[email-assets] API server running on http://localhost:${PORT}  (email: ${EMAIL_PATH})`);
});
