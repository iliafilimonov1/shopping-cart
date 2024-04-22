// import { productList } from '../selectors/selectors.js'
import { addProductToBasket } from './productService'
import { stepper } from '../components/stepper'

/**
 * Функция для генерации HTML-кода карточки товара
 * @param {Object} product - Объект товара
 * @param {string} product.id - ID товара
 * @param {string} product.name - Название товара
 * @param {string} product.rating - Рейтинг товара
 * @param {string} product.price - Цена товара
 * @param {string} product.imgSrc - Ссылка на изображение товара
 * @param {string} product.category - Категория товара
 * @param {HTMLElement} parentNode - Родительский узел для вставки карточки
 */
export const generateProductCardHTML = (product, parentNode) => {
  if (parentNode) {
    const cardHTML = `
    <div class="main-card" data-id="${product?.id}">
      <div class="card-image">
        <img src="${product?.imgSrc}" alt="image">
        <div class="card-wishlist">
          <div class="wishlist-rating">
            <div class="rating-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6.12414H9.89333L8 0L6.10667 6.12414H0L4.93333 9.90345L3.06667 16L8 12.2207L12.9333 16L11.04 9.87586L16 6.12414Z" fill="#FFCE31" />
              </svg>
            </div>
            <span class="rating-amount">${product?.rating}</span>
          </div>
          <svg class="whishlist-heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </div>
      </div>
      <h3 class="card-name">${product?.name}</h3>
      <p class="card-category">${product?.category}</p>
      <p class="card-price">${product?.price}</p>
      <!-- Компонент степпер  -->
      <div class="counter">
        <label class="counter__field">
          <input class="counter__input" type="text" value="1" maxlength="3" readonly autocomplete="off" />
          <span class="counter__text">шт</span>
        </label>
        <div class="counter__btns">
          <button class="counter__btn counter__btn--up" aria-label="Увеличить количество">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
              <g>
                <g>
                  <path d="M3.904-.035L-.003 3.151 1.02 5.03l2.988-2.387 2.988 2.387 1.022-1.88-3.89-3.186z"></path>
                </g>
              </g>
            </svg>
          </button>
          <button disabled class="counter__btn counter__btn--down" aria-label="Уменьшить количество">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
              <g>
                <g>
                  <path d="M3.904 5.003L-.003 1.818 1.02-.062l2.988 2.386L6.995-.063l1.022 1.88-3.89 3.186z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <button class="btn btn-primary">Add to cart</button>
    </div>
  `
    // Вставка шаблона в нужный родитель
    parentNode.insertAdjacentHTML('beforeend', cardHTML)

    // Инициализация степпера
    // stepper()

    // Получение всех кнопок
    const addProductToBasketBtns = document.querySelectorAll('.btn-primary')

    addProductToBasketBtns.forEach((button) => button.addEventListener('click', addProductToBasket))
  }
}
