import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PropDbDataSource} from '../datasources';
import {Property, PropertyRelations} from '../models';

export class PropertyRepository extends DefaultCrudRepository<
  Property,
  typeof Property.prototype.id,
  PropertyRelations
> {
  constructor(
    @inject('datasources.propDB') dataSource: PropDbDataSource,
  ) {
    super(Property, dataSource);
  }
}
