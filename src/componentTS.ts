export class ComponentTS {
  public static create() {
    const element = document.createElement('p')
    element.innerHTML = hello()
    return element
  }
}

export function hello() {
  return 'Hello from TypeScript'
}
