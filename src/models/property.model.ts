import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Property extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    default: 'Plot',
  })
  type?: string;

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
  dimensions?: string;

  @property({
    type: 'string',
  })
  facing?: string;

  @property({
    type: 'number',
  })
  price?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Property>) {
    super(data);
  }
}

export interface PropertyRelations {
  // describe navigational properties here
}

export type PropertyWithRelations = Property & PropertyRelations;
