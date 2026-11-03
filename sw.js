<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OFFuncional - Gestão & Ergonomia</title>
  
  <!-- Configurações PWA -->
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#d94e28">
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }
  </script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary-color: #d94e28;
      --primary-dark: #b83d1c;
      --bg-color: #f4f5f7;
      --card-bg: #ffffff;
      --text-main: #2c3e50;
      --text-muted: #7f8c8d;
      --border-color: #e2e8f0;
      --nav-height: 65px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    body {
      background-color: #1a1a1a;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .app-container {
      width: 100%;
      max-width: 420px;
      height: 100vh;
      max-height: 880px;
      background-color: var(--bg-color);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
      border-radius: 24px;
    }

    .app-header {
      background-color: var(--primary-color);
      color: #ffffff;
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 10;
    }

    .header-top {
      display: flex;
      justify-content: space-between;
