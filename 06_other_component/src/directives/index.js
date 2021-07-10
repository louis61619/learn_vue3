import regersiterFormateTime from './formate-time'

export default function regersiterDirectives(app) {
  app.directive(regersiterFormateTime(app))
}