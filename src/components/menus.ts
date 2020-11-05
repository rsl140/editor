import SelectionRange from './selectionRange'
class Menus {
  public element: HTMLElement
  public value: string
  public target: string
  public selectionRange: SelectionRange

  constructor (element: HTMLElement, target: string, value: string, selectionRange: SelectionRange) {
    this.element = element as HTMLDivElement
    this.value = value
    this.target = target
    this.selectionRange = selectionRange
  }

  // 初始化
  init (): void {
    this.element.onmousedown = (e: Event) => {
      this.selectionRange.resetSelection()
      document.execCommand(this.target, false, this.value)
      e.preventDefault()
    }
    this.element.onmouseup = (e: Event) => {
      this.selectionRange.saveSelection()
    }
  }
}
export default Menus