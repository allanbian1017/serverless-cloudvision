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
