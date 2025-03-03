import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PropDbDataSource} from '../datasources';
import {Requirement, RequirementRelations} from '../models';

export class RequirementRepository extends DefaultCrudRepository<
  Requirement,
  typeof Requirement.prototype.id,
  RequirementRelations
> {
  constructor(
    @inject('datasources.propDB') dataSource: PropDbDataSource,
  ) {
    super(Requirement, dataSource);
  }
}
