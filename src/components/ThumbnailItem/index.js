import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const imageClassName = isActive ? 'active-thumbnail' : 'inactive-thumbnail'

  const onClicked = () => {
    onClickThumbnail(id)
  }

  return (
    <li id={id} className="list-item">
      <buttton type="button" className="btn" onClick={onClicked}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageClassName}
        />
      </buttton>
    </li>
  )
}

export default ThumbnailItem
