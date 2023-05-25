module.exports = {
  apps: [
    {
      name: "vdd.monster",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 7000",
      cwd: "./",
      exec_mode: "cluster",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
