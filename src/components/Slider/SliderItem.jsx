import css from './slider.module.css'

export const SliderItem = ({ product }) => {
  console.log(product)
  return (
    <div className={css.slideritem} key={product.id}>
      <img src={`src/assets/${product.img}`} alt={product.title} />
      <p className={css.title}>{product.title}</p>
      <p className={css.descript}>{product.descript}</p>
    </div>
  )
}
