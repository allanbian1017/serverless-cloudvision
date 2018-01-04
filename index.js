'use strict';

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

exports.cloudvision = (req, res) => {
  if (!req.body || !req.body.image_url) {
    return res.status(400).send('Bad Request');
  }

  const request = {
    image: {
      source: {
        imageUri: req.body.image_url,
      },
    },
    features: [
      {
        type: 'FACE_DETECTION',
      },
      {
        type: 'LANDMARK_DETECTION',
      },
      {
        type: 'LOGO_DETECTION',
      },
      {
        type: 'LABEL_DETECTION',
      },
      {
        type: 'TEXT_DETECTION',
      },
      {
        type: 'DOCUMENT_TEXT_DETECTION',
      },
      {
        type: 'SAFE_SEARCH_DETECTION',
      },
      {
        type: 'IMAGE_PROPERTIES',
      },
      {
        type: 'CROP_HINTS',
      },
      {
        type: 'WEB_DETECTION',
      },
    ],
  };

  client
    .annotateImage(request)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);

      res.status(500).send('Internal Server Error');
    });
};
