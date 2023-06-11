import nc from 'next-connect-v0';

import {
  updateSurvey,
  removeSurvey,
  getSurveys,
  getUserSurveys,
  addSurvey,
} from '@/lib/api-functions/server/surveys/controllers';

const baseRoute = '/api/v1/surveys/:id?';

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
    const { id } = req.params;
    if (id) {
      return getUserSurveys(req, res);
    } else {
      getSurveys(req, res);
    }
  })
  .post(baseRoute, async (req, res) => {
    addSurvey(req, res);
  })
  .put(baseRoute, async (req, res) => {
    updateSurvey(req, res);
  })
  .delete(baseRoute, async (req, res) => {
    removeSurvey(req, res);
  });

export default handler;
