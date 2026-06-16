/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // Keep viewBox so icons can be resized via CSS without cropping
                      removeViewBox: false,
                    },
                  },
                },
                // Prefix ids (e.g. clipPath ids) per-file so that multiple inlined
                // SVGs don't collide on minified ids like "a" (breaks clip-paths).
                'prefixIds',
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
