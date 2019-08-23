import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconShare({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.775 5.052a.606.606 0 01.634.089l6.386 5.377a.57.57 0 01.205.434.57.57 0 01-.202.435l-6.386 5.442a.606.606 0 01-.636.091.576.576 0 01-.348-.525v-2.548c-2.13.083-5.798 1.119-7.202 4.778a.595.595 0 01-.624.371.585.585 0 01-.52-.501c-.22-1.708-.053-4.281 1.207-6.453 1.222-2.106 3.443-3.777 7.139-3.938V5.577c0-.226.135-.431.347-.525zm.84 1.787v1.829a.585.585 0 01-.594.577c-3.634 0-5.627 1.517-6.699 3.364-.657 1.133-.98 2.412-1.09 3.588 2.233-2.95 5.978-3.586 7.817-3.501a.584.584 0 01.565.576v1.85l4.89-4.166-4.89-4.117z"
        clipRule="evenodd"
      />
    </svg>
  )
}

IconShare.propTypes = IconPropTypes
export default IconShare
