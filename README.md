Docker PM2 Svelte 3.29.7
========
powered by pm2:latest-alpine image

[Svelte][1] is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.


Available tags you can use: latest (default) or dev

Tag dev runs in live reload mode so you can make changes to the file and they update on the website without need to restart


## docker-compose.yml

```yaml
version: '2'
services:
  svelte:
    image: aamservices/pm2-svelte:latest
    restart: unless-stopped
    volumes:
      - svelte_data:/usr/src/app
    networks:
      - internal
    ports:
      - 3000
volumes:
  svelte_data:
    driver: local
```


[1]: https://svelte.dev
