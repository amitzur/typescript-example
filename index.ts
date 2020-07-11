import {Thing, ThingType, Other} from './things'

function foo() : typeof ThingType {
  const thing = new Thing('bla', new Other())
  return thing
}
