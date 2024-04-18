import { formValidate } from './forms/formValidate'
import { Sidebar } from './components/sidebar'
import { loadJSON } from './products/productService'

/**
 * Загружает данные при отрисовке страницы страницы.
 */
const init = (() => {
  window.addEventListener('DOMContentLoaded', () => {
    loadJSON()
    formValidate() //  Валидация формы
  })
})()

/**
 * Создает экземпляр сайдбара.
 * @param {string} sidebarComponent - Селектор компонента сайдбара.
 * @param {string} toggleButton - Селектор кнопки, по клику на которую открывается сайдбар.
 * @param {string} [position='left'] - Позиция сайдбара (по умолчанию 'left').
 */
const panel = new Sidebar('#sidebar', '#show-sidebar', 'right')
