import './css/index.less'
import Menus from './components/menus'
import SelectionRange from './components/selectionRange'

window.onload = () => {
  let blod = document.querySelector('#blod') as HTMLElement
  let title = document.querySelectorAll('.title_name')
  let color = document.querySelectorAll('.color_name')
  let editor = document.getElementById('editor') as HTMLElement
  let selectionRange = new SelectionRange(editor)
  selectionRange.init()
  // 加粗
  let blodMenu = new Menus(blod, 'bold', 'null', selectionRange)
  blodMenu.init()

  // 设置标题
  title.forEach(item => {
    let li = item as HTMLElement
    let titleMenu: Menus
    if (li.innerHTML === '正文') {
      titleMenu = new Menus(li, 'formatblock', '<p>', selectionRange)
    } else {
      titleMenu = new Menus(li, 'formatblock', li.innerHTML, selectionRange)
    }
    titleMenu.init()
  })

  // 设置颜色
  color.forEach(item => {
    let li = item as HTMLElement
    let colorMenu = new Menus(li, 'forecolor', li.innerHTML, selectionRange)
    colorMenu.init()
  })
}
