import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { textStyle, SPACING, RADII, GU } from '../../style'
import { useLayout } from '../Layout/Layout'
import { IconCheck, IconCross } from '../../icons'
import StyledText from '../StyledText/StyledText'
import LoadingRing from '../LoadingRing/LoadingRing'

const getStatusIcon = status => {
  switch (status) {
    case 'fail':
      return <IconCross />
    case 'success':
      return <IconCheck />
    case 'loading':
      return <LoadingRing />
    default:
      return null
  }
}

const FileInput = React.forwardRef(
  (
    {
      autofocus,
      title,
      subtitle,
      status,
      error,
      disabled,
      value,
      text,
      multiple,
      onChange,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const { layoutName } = useLayout()
    const radius = layoutName === 'large' ? RADII['medium'] : RADII[layoutName]
    const [isDragOver, setIsDragOver] = useState(false)
    const centerText =
      text ||
      (isDragOver ? (
        <StyledText name="title3">Drop files to upload!</StyledText>
      ) : (
        <p>
          Drag & drop or{' '}
          <span
            css={`
              color: ${theme.primary};
            `}
          >
            browse
          </span>{' '}
          files to upload.
        </p>
      ))

    const handleRef = useCallback(
      element => {
        if (ref) {
          ref.current = element
        }
        if (autofocus && element) {
          element.focus()
        }
      },
      [autofocus, ref]
    )

    const handleDragEnter = () => {
      if (disabled) {
        return
      }
      setIsDragOver(true)
    }

    const handleDragLeave = event => {
      setIsDragOver(false)
    }

    const handleDrop = event => {
      setIsDragOver(false)
      if (onChange) {
        onChange(event.nativeEvent.dataTransfer.files)
      }
    }

    const handleChange = event => {
      if (onChange) {
        onChange(event.target.files)
      }
    }

    return (
      <div
        css={`
          width: 100%;
        `}
      >
        {title && (
          <div
            css={`
              ${textStyle('title3')};
            `}
          >
            {title}
          </div>
        )}
        {subtitle && (
          <div
            css={`
              ${textStyle('title4')};
              color: ${theme.disabledContent};
            `}
          >
            {subtitle}
          </div>
        )}
        <div
          css={`
            padding: ${1 * GU}px;
            border-radius: ${radius}px;
            background-color: ${theme.primary}09;
          `}
        >
          <div
            css={`
              position: relative;
              width: 100%;
              height: ${props.height}px;
              border: ${!isDragOver ? 'dashed' : 'solid'} 1px
                ${error ? theme.red : theme.primary};
              border-radius: ${radius}px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            `}
          >
            <input
              ref={handleRef}
              type="file"
              multiple={multiple}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onChange={handleChange}
              css={`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
              `}
            />
            <StyledText
              name="title3"
              css={`
                margin: ${SPACING[layoutName]}px;
                color: ${theme.hint};
              `}
            >
              {centerText}
            </StyledText>
          </div>
        </div>
        <div
          css={`
            display: grid;
            grid-template-columns: 50% 50%;
            margin-top: ${1 * GU}px;
            padding: ${SPACING[layoutName]}px;
            border-radius: ${radius}px;
            background-color: ${theme.primary}09;
          `}
        >
          <div
            css={`
              justify-self: flex-start;
              display: flex;
              flex-direction: column;
            `}
          >
            {value &&
              value.map((f, k) => (
                <div
                  key={`lv-${k}`}
                  css={`
                    display: flex;
                    flex-direction: row;
                  `}
                >
                  {getStatusIcon(f.status)} {f.name}
                </div>
              ))}
          </div>
          <div
            css={`
              justify-self: flex-end;
              display: flex;
              flex-direction: column;
            `}
          >
            {value &&
              value.map(
                (f, k) =>
                  f.url && (
                    <a
                      key={`rv-${k}`}
                      href={f.url ? f.url : '#'}
                      target="_blank"
                    >
                      View Document
                    </a>
                  )
              )}
          </div>
        </div>
        {error && (
          <div
            css={`
              color: ${theme.red};
              ${textStyle('body3')};
              margin-left: ${1 * GU}px;
            `}
          >
            {error}
          </div>
        )}
      </div>
    )
  }
)

const filesArgs = PropTypes.shape({
  status: PropTypes.oneOf(['none', 'loading', 'success', 'fail']),
  name: PropTypes.string,
  url: PropTypes.string,
})

FileInput.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  autofocus: PropTypes.bool,
  required: PropTypes.bool,
  status: PropTypes.oneOf(['normal', 'success', 'error']),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.arrayOf(filesArgs),
  text: PropTypes.any,
  multiple: PropTypes.bool,
  height: PropTypes.number,
  onChange: PropTypes.func,
}

FileInput.defaultProps = {
  title: '',
  subtitle: '',
  autofocus: false,
  required: false,
  status: 'normal',
  error: '',
  disabled: false,
  value: null,
  text: null,
  multiple: false,
  height: 15 * GU,
  onChange: () => {},
}

export default FileInput
export { filesArgs }
