import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PropDbDataSource} from '../datasources';
import {Client, ClientRelations, Property, Requirement} from '../models';
import {PropertyRepository} from './property.repository';
import {RequirementRepository} from './requirement.repository';

export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.id,
  ClientRelations
> {

  public readonly properties: HasManyRepositoryFactory<Property, typeof Client.prototype.id>;

  public readonly requirements: HasManyRepositoryFactory<Requirement, typeof Client.prototype.id>;

  constructor(
    @inject('datasources.propDB') dataSource: PropDbDataSource, @repository.getter('PropertyRepository') protected propertyRepositoryGetter: Getter<PropertyRepository>, @repository.getter('RequirementRepository') protected requirementRepositoryGetter: Getter<RequirementRepository>,
  ) {
    super(Client, dataSource);
    this.requirements = this.createHasManyRepositoryFactoryFor('requirements', requirementRepositoryGetter,);
    this.registerInclusionResolver('requirements', this.requirements.inclusionResolver);
    this.properties = this.createHasManyRepositoryFactoryFor('properties', propertyRepositoryGetter,);
    this.registerInclusionResolver('properties', this.properties.inclusionResolver);
  }
}
