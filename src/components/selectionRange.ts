class selectionRange {
  public editor: HTMLElement
  public range: Range | null | undefined
  constructor (editor: HTMLElement) {
    this.editor = editor
  }

  init () {
      // 记录选区
  this.editor.onmouseup = (e: Event) => {
    this.saveSelection()
  }
  this.editor.onkeyup = (e: Event) => {
    this.saveSelection()
  }
  this.editor.onmouseout = (e: Event) => {
    this.saveSelection()
  }
  }
  // 保存选区
  saveSelection () {
    const selection = window.getSelection() as Selection
    if (selection.rangeCount === 0) {
        return
    }

    const range: Range | null | undefined = selection.getRangeAt(0)
    let elem: Node
    let containerElem
    if (range) {
      elem = range.commonAncestorContainer
      containerElem = elem.nodeType === 1 ? elem : elem.parentNode
    }

    if (!containerElem) return
    // 编辑区是否包含选区内容
    if(this.editor.contains(containerElem)) {
      this.range = range
    }
  }

  // 恢复选区
  resetSelection () {
    const selection = window.getSelection() as Selection
    selection.removeAllRanges()
    if (this.range) {
      selection.addRange(this.range)
    }
  }
}
export default selectionRange