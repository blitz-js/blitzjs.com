export function ShowcaseThumbnail({title, thumbnail, URL, onClick}) {
  return (
    <div className="showcase-block" onClick={onClick}>
      <img src={thumbnail} className="showcase-block-image" alt={title} />
      <h4 className="showcase-block-title font-primary text-sm lg:text-md xl:text-lg text-gray-600 dark:text-gray-300 font-semibold my-1 mt-2">
        {title}
      </h4>
    </div>
  )
}
