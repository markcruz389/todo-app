# todo-app MERN Stack

## Run the System

The services can be run on the background with command:

```bash
docker-compose up -d
```

Navigate to
`http://127.0.0.1:8000`

## Stop the System

Stopping all the running containers is also simple with a single command:

```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:

```bash
docker-compose down --rmi all
```

Dockerize resource:
https://www.bezkoder.com/docker-mern/
