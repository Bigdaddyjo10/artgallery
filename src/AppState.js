import { reactive } from 'vue'
import { ArtWorks } from './models/ArtWorks.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /**@type { ArtWorks[]}*/
  artWorks: [],
  currentPage: 1,
  totalPages: Infinity,
  /**@type {ArtWorks}*/
  activeArt: null
})
