# Algolia with Rancher Documentation

The search index used by the Rancher documentation is generated by [running our own crawler](https://docsearch.algolia.com/docs/legacy/run-your-own).

## Running the Crawler

To run the crawler, you'll need:
- A configuration file, which can be found [here](./config.json).
- An `.env` file, containing your credentials.

```
APPLICATION_ID=<app_id>
API_KEY=<key_with_write_permissions>
```

If you're running the crawler from the Docker image, run:

```
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

Otherwise, follow [these instructions](https://docsearch.algolia.com/docs/legacy/run-your-own#running-the-crawler-from-the-code-base) if running the crawler using the code base.
