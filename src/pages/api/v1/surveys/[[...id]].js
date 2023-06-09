import nc from 'next-connect-v0';

import {
  updateSurvey,
  removeSurvey,
  getSurveys,
  addSurvey
} from '@/lib/api-functions/server/surveys/controllers'

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
      const session = await getSession(req, res);
      req.user = session.user;
      next();
    } catch (err) {
      return handleUnauthorisedAPICall(res);
    }
  })
  .get(baseRoute, async (req, res) => {
    getSurveys(req, res);
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