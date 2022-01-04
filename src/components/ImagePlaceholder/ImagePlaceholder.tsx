interface ImagePlaceholderProps {
  width?: string,
  height?: string
}

function ImagePlaceholder({ width = '160', height = '100' }: ImagePlaceholderProps) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    width: `${width}px`,
    height: `${height}px`
  }
  return (
    <div style={style}>
      {`${width}x${height}`}
    </div>
  )
}

export default ImagePlaceholder
