import { Models } from '@rematch/core'
import { session } from './session'
import { game } from './game'
 
export interface RootModel extends Models<RootModel> {
  session: typeof session,
  game: typeof game
}
 
export const models: RootModel = { session, game }
 