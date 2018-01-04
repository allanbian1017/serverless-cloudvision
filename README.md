# serverless-cloudvision

This project is a serverless API wrapper around
[Google Cloud Vision](https://cloud.google.com/vision/) using
[Google Cloud Function](https://cloud.google.com/functions/). Deployment is performed with the
[Serverless Framework](http://serverless.com/).

## Usage

Install the [Serverless Framework](https://github.com/serverless/serverless).

```
npm install serverless -g
```

Install all dependency library:

```
npm install
```

Before deploy, you need to setup Google Cloud credential by following the instructions [here](https://serverless.com/framework/docs/providers/google/guide/credentials/). And replace the `projectid` with your Google Cloud project id in `serverless.yml`.

In order to access the Cloud Vision API, you will need to enable Cloud Vision API in your project.

[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com)

Deploy:

```
sls deploy
```

For instance, the following `curl` command sends an image URL to Cloud function.

```
curl -H "Content-Type: application/json" -X POST \
-d '{"image_url": "https://cloud.google.com/vision/images/rushmore.jpg"}' \
https://some-project-id.cloudfunctions.net/cloudvision
```
