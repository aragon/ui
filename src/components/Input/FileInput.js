import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { textStyle, SPACING, RADII, GU } from '../../style'
import { useLayout } from '../Layout/Layout'
import { IconCheck, IconCross } from '../../icons'
import StyledText from '../StyledText/StyledText'

const getStatusIcon = status => {
  switch (status) {
    case 'error':
      return <IconCross />
    case 'success':
      return <IconCheck />
    default:
      return
  }
}

// Simple text input
const FileInput = React.forwardRef(
  (
    {
      autofocus,
      title,
      subtitle,
      status,
      error,
      disabled,
      filesArgs,
      setFiles,
      text,
      multiple,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const { layoutName } = useLayout()
    const radius = layoutName === 'large' ? RADII['medium'] : RADII[layoutName]
    const [isDragOver, setIsDragOver] = useState(false)
    const centerText = text || (
      <div
        css={`
          display: flex;
          flex-direction: row;
          padding: ${SPACING[layoutName]}px;
          color: ${theme.hint};
        `}
      >
        <StyledText name="title3">'Drag & drop or </StyledText>
        <StyledText
          name="title3"
          css={`
            color: ${theme.primary};
            margin: 0 ${GU}px 0 ${GU}px;
          `}
        >
          browse
        </StyledText>
        <StyledText name="title3">files to upload!</StyledText>
      </div>
    )

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
      if (!event.relatedTarget || event.relatedTarget.id !== buttonId) {
        setIsDragOver(false)
      }
    }

    const handleDrop = event => {
      setIsDragOver(false)
      setFiles(event.nativeEvent.dataTransfer.files)
    }

    return (
      <div
        css={`
          width: ${props.wide ? '100%' : 'auto'};
        `}
      >
        {title && (
          <div
            css={`
              ${textStyle('title2')};
            `}
          >
            {title}
          </div>
        )}
        {subtitle && (
          <div
            css={`
              ${textStyle('body2')};
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
              height: ${props.height || 15 * GU}px;
              border: ${!isDragOver ? 'dashed' : 'solid'} 1px ${theme.primary};
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
                padding: ${SPACING[layoutName]}px;
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
            {filesArgs &&
              filesArgs.map((f, k) => (
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
            {filesArgs &&
              filesArgs.map((f, k) => (
                <a key={`rv-${k}`} href={f.url ? f.url : '#'} target="_blank">
                  View Document
                </a>
              ))}
          </div>
        </div>
      </div>
    )
  }
)

const filesArgs = PropTypes.shape({
  status: PropTypes.oneOf(['none', 'success', 'fail']),
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
  filesArgs: PropTypes.arrayOf(filesArgs),
  setFiles: PropTypes.func,
  text: PropTypes.any,
  multiple: PropTypes.bool,
}

FileInput.defaultProps = {
  title: '',
  subtitle: '',
  autofocus: false,
  required: false,
  status: 'normal',
  error: '',
  disabled: false,
  filesArgs: null,
  text: null,
  multiple: false,
}

export default FileInput
export { filesArgs }
