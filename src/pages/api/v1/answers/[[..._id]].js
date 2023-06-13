import nc from 'next-connect-v0';

import {
  updateAnswers,
  getSurveys,
} from '@/lib/api-functions/server/surveys/controllers';

const baseRoute = '/api/v1/answers/:_id?';

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
  attachParams: true,
})
  .use(async (req, res, next) => {
    if (req.method === 'GET') {
      return next();
    }
    try {
      next();
    } catch (err) {
      console.log(err);
    }
  })
  .get(baseRoute, async (req, res) => {
    getSurveys(req, res);
  })
  .put(baseRoute, async (req, res) => {
    updateAnswers(req, res);
  })

export default handler;
