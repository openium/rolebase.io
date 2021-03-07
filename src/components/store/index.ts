import { createStore } from 'easy-peasy'
import circles from './circles'
import members from './members'
import orgs from './orgs'
import roles from './roles'

const model = {
  circles,
  members,
  orgs,
  roles,
}

export type StoreModel = typeof model

export const store = createStore(model)
