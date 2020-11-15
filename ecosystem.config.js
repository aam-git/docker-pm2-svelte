   module.exports = {
     apps: [
       {
         name: 'svelte',
         cwd: '/usr/src/app/svelte/',
         script: 'npm run dev',
         instances: 1,
         autorestart: true,
         watch: false,
         max_memory_restart: '1G',
         env: {
           NODE_ENV: 'development',
         },
         env_production: {
           NODE_ENV: 'production',
         },
       },
     ],
   };
