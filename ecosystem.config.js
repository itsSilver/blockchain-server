module.exports = {
  apps: [
    {
      name: 'Backend-explorer',
      // cwd: "autostop-backend",
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
