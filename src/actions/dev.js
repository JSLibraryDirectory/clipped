const nodemon = require('nodemon')
const {cwd, resolvePath} = require('../utils')
const {ncp, rimraf, mkdirp} = require('../utils/file-manipulation')
const {spawnFactory} = require('../utils/process-spawn')
const {getConfig, getClipPath} = require('./config')

/**
 * dev - Handle dev action
 *
 * @param {clippedConfig} [config={}]
 *
 * @returns {Promise<void>}
 */
async function dev (config: clippedConfig = getConfig()): Promise<void> {
  // Makee sure dist folder is clear
  await rimraf(resolvePath('./dist', cwd))
  await mkdirp(resolvePath('./dist', cwd))

  const wrapperPath = await getClipPath(config.type, 'wrapper')
  await spawnFactory('npm', ['install', '--prefix', wrapperPath])
  await spawnFactory('npm', ['run', `dev`, '--prefix', wrapperPath, '--', `--env.clippedTarget=${cwd}`])
}

if (!module.parent) dev()

module.exports = dev
