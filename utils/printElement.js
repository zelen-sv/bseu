import { Printd } from 'printd'

export default function printElement(component) {
  const d = new Printd()

  d.print( document.getElementById(component) )
}
