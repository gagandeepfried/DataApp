import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Requirement extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  area?: string;

  @property({
    type: 'string',
  })
  locality?: string;

  @property({
    type: 'number',
  })
  size?: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
  })
  facing?: string;

  @property({
    type: 'string',
  })
  clientId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Requirement>) {
    super(data);
  }
}

export interface RequirementRelations {
  // describe navigational properties here
}

export type RequirementWithRelations = Requirement & RequirementRelations;
