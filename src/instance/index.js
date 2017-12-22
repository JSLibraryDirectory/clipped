import {initConfig} from './config'
import {initHook} from './hook'
import {initLog} from './log'
import {initClip} from './clip'
import {initMiddleware} from './middleware'
import {initDocker} from './docker'
import {initHelper} from './helper'

function Clipped (opt: Object = {}) {
  if (
    process.env.NODE_ENV !== 'production' &&
    !(this instanceof Clipped)
  ) {
    console.log('Clipped is a constructor and should be called with the `new` keyword')
  }

  return this
}

initHelper(Clipped)
initConfig(Clipped)
initHook(Clipped)
initLog(Clipped)
initClip(Clipped)
initDocker(Clipped)
initMiddleware(Clipped)

export default Clipped