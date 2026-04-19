import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // 避免工作区存在多个 package-lock.json 时误判项目根目录
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
