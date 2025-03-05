import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Client,
  Requirement,
} from '../models';
import {ClientRepository} from '../repositories';

export class ClientRequirementController {
  constructor(
    @repository(ClientRepository) protected clientRepository: ClientRepository,
  ) { }

  @get('/clients/{id}/requirements', {
    responses: {
      '200': {
        description: 'Array of Client has many Requirement',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Requirement)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Requirement>,
  ): Promise<Requirement[]> {
    return this.clientRepository.requirements(id).find(filter);
  }

  @post('/clients/{id}/requirements', {
    responses: {
      '200': {
        description: 'Client model instance',
        content: {'application/json': {schema: getModelSchemaRef(Requirement)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Client.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Requirement, {
            title: 'NewRequirementInClient',
            exclude: ['id'],
            optional: ['clientId']
          }),
        },
      },
    }) requirement: Omit<Requirement, 'id'>,
  ): Promise<Requirement> {
    return this.clientRepository.requirements(id).create(requirement);
  }

  @patch('/clients/{id}/requirements', {
    responses: {
      '200': {
        description: 'Client.Requirement PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Requirement, {partial: true}),
        },
      },
    })
    requirement: Partial<Requirement>,
    @param.query.object('where', getWhereSchemaFor(Requirement)) where?: Where<Requirement>,
  ): Promise<Count> {
    return this.clientRepository.requirements(id).patch(requirement, where);
  }

  @del('/clients/{id}/requirements', {
    responses: {
      '200': {
        description: 'Client.Requirement DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Requirement)) where?: Where<Requirement>,
  ): Promise<Count> {
    return this.clientRepository.requirements(id).delete(where);
  }
}
