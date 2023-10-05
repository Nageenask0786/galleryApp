import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailDetails, getActiveId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = ThumbnailDetails

  const activeClass = isActive ? 'img' : 'inactive'

  const OnClickImage = () => {
    getActiveId(id)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={OnClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
