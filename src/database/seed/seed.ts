import { Field } from '../../entity/Field.entity';
import { Spec } from '../../entity/Spec.entity';
import { dataSource } from '../../data-source';
import { FieldController } from '../../controller/field.controller';
import { SpecController } from '../../controller/spec.controller';

async function seed() {
  await dataSource.initialize();

  const fieldController = new FieldController();
  const specController = new SpecController();

  const fieldDtos = [
    {
      title: 'Color',
      options: [{ title: 'Red' }, { title: 'Green' }, { title: 'Blue' }],
    },
    {
      title: 'Type',
      options: [{ title: 'Type A' }, { title: 'Type B' }, { title: 'Type C' }],
    },
  ];
  const fields = await Promise.all(
    fieldDtos.map(async (dto) => {
      return await fieldController.create(dto);
    })
  );
  await specController.create({
    name: 'Spec 1',
    fieldValues: {
      [String(fields[0]._id)]: String(fields[0].options[1]._id),
      [String(fields[1]._id)]: String(fields[1].options[2]._id),
    },
  });

  console.log('Seeded successfully');
  process.exit();
}

seed();
