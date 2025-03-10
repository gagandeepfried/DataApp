import {Entity, hasMany, model, property} from '@loopback/repository';
import {Property} from './property.model';
import {Requirement} from './requirement.model';

@model({settings: {strict: false}})
export class Client extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  contact?: string;

  @hasMany(() => Property)
  properties: Property[];

  @hasMany(() => Requirement)
  requirements: Requirement[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Client>) {
    super(data);
  }
}

export interface ClientRelations {
  // describe navigational properties here
}

export type ClientWithRelations = Client & ClientRelations;
