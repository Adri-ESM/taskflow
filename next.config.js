module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)', // Aplica a todas las rutas
          headers: [
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin',
            },
            {
              key: 'Cross-Origin-Embedder-Policy',
              value: 'require-corp',
            },
          ],
        },
      ];
    },
    
    reactStrictMode: true, // Esto mantiene el modo estricto de React
  
    experimental: {
      reactRefresh: false, // Desactiva temporalmente el Fast Refresh
    },
  };
  