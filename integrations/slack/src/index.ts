import { sentry as sentryHelpers } from '@botpress/sdk-addons'

import actions from './actions'
import channels from './channels'
import { handler } from './handler'
import { register, unregister, createUser, createConversation } from './setup'
import * as bp from '.botpress'

const integration = new bp.Integration({
  register,
  unregister,
  createUser,
  createConversation,
  actions,
  channels,
  handler,
})

export default sentryHelpers.wrapIntegration(integration, {
  dsn: bp.secrets.SENTRY_DSN,
  environment: bp.secrets.SENTRY_ENVIRONMENT,
  release: bp.secrets.SENTRY_RELEASE,
})
