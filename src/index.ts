import './css/index.less'

class Menus {
  public element: HTMLElement
  public value: string
  public target: string

  constructor(element: HTMLElement, target: string, value: string) {
    this.element = element as HTMLDivElement
    this.value = value
    this.target = target
  }

  // 初始化
  init () {
    this.element.onmousedown = (e: Event) => {
      document.execCommand(this.target, false, this.value)
      e.preventDefault()
    }
  }
}

window.onload = () => {
  let blod = document.querySelector('#blod') as HTMLElement
  let title = document.querySelectorAll('.title_name')
  let color = document.querySelectorAll('.color_name')
  // 加粗
  let blodMenu = new Menus(blod, 'bold', 'null')
  blodMenu.init()

  // 设置标题
  title.forEach(item => {
    let li = item as HTMLElement
    let titleMenu: Menus
    if (li.innerHTML === '正文') {
      titleMenu = new Menus(li, 'formatblock', '<p>')
    } else {
      titleMenu = new Menus(li, 'formatblock', li.innerHTML)
    }
    titleMenu.init()
  })

  // 设置颜色
  color.forEach(item => {
    let li = item as HTMLElement
    let colorMenu = new Menus(li, 'forecolor', li.innerHTML)
    colorMenu.init()
  })
}