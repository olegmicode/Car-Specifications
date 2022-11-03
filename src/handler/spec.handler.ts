import * as express from 'express';
import { Request } from 'express';
import { checkSchema, Schema } from 'express-validator';

import { FieldController } from '../controller/field.controller';
import { SpecController } from '../controller/spec.controller';
import { setSpec } from '../resolver/spec';

const router = express.Router();

const specSchema: Schema = {
  name: {
    isString: true,
  },
  fieldValues: {
    isObject: true,
    custom: {
      options: async (value) => {
        const fieldsController = new FieldController();
        const fields = await fieldsController.list();
        Object.keys(value).every((fieldKey) => !!fields.find((field) => String(field._id) === fieldKey));
      },
    },
  },
};

router.use('*/specs/:specId/*', setSpec);

router.get('/specs', async function (req, res, next) {
  const controller = new SpecController();
  res.json(await controller.all());
});

router.get('/specs/:specId', async function (req: Request, res, next) {
  res.json(req.entityParams.spec);
});

router.put('/specs/:specId', ...checkSchema(specSchema), async function (req: Request, res, next) {
  const { spec } = req.entityParams;
  const controller = new SpecController();

  const nextSpec = await controller.update(spec, req.body);

  res.json(nextSpec);
});

router.delete('/specs/:specId', ...checkSchema(specSchema), async function (req: Request, res, next) {
  const { spec } = req.entityParams;
  const controller = new SpecController();

  await controller.remove(spec);

  return res.status(204).json();
});

router.post('/specs', ...checkSchema(specSchema), async function (req, res, next) {
  const { name, fieldValues } = req.body;
  const controller = new SpecController();

  await controller.create({
    name,
    fieldValues,
  });
});

export { router as specRouter };
