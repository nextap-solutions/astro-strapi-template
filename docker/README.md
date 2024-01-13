# Initialization

To bootstrap just database for **development** run in this directory:

```bash
docker compose -f docker-compose.db.yml up
```

For **development** run in this directory:

```bash
docker compose -f docker-compose.yml up
```

For **production** run in this directory:

```bash
NODE_ENV=production docker compose -f docker-compose.yml -f docker-compose.prod.yml up
```
