/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { withAxiom } from "next-axiom";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      {
        "thread-stream": "commonjs thread-stream",
      },
    ];
    config.resolve.fallback = { fs: false };
    return config;
  },
  serverComponentsExternalPackages: ["pino", "pino-pretty"],
};

export default withAxiom(config);
