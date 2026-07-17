import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tour",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tour/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/music",
        destination: "/",
        permanent: true,
      },
      {
        source: "/music/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;