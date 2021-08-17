module.exports = {
  async rewrites() {
    return [
      {
        source: '/products',
        destination: `http://localhost:3001/products`,
      },
      {
        source: '/products/:path*',
        destination: `http://localhost:3001/products/:path*`,
      },
      {
        source: '/cart',
        destination: `http://localhost:3002/cart`,
      },
      {
        source: '/cart/:path*',
        destination: `http://localhost:3002/cart/:path*`,
      },
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/next',
        destination: `https://nextjs.org/`,
      },
    ]
  }
};
