import { Thread } from '@shared/thread'
import memoize from 'memoizee'
import * as yup from 'yup'
import { getCollection, getEntityMethods, subscribeQuery } from '../firebase'
import { nameSchema } from '../schemas'

const collection = getCollection<Thread>('threads')

const methods = getEntityMethods<Thread, 'draft' | 'archived' | 'createdAt'>(
  collection,
  {
    createTransform: (thread) => ({
      ...thread,
      draft: false,
      archived: false,
      createdAt: new Date(),
    }),
  }
)
export const getThread = methods.get
export const createThread = methods.create
export const updateThread = methods.update
export const subscribeThread = methods.subscribe
export const deleteThread = methods.delete

export const subscribeThreads = memoize((orgId: string) =>
  subscribeQuery(collection.where('orgId', '==', orgId).orderBy('createdAt'))
)

export const threadCreateSchema = yup.object().shape({
  title: nameSchema,
  circleId: yup.string().required(),
})

export const threadEditSchema = yup.object().shape({
  title: nameSchema,
  circleId: yup.string().required(),
  archived: yup.boolean(),
  draft: yup.boolean(),
})
