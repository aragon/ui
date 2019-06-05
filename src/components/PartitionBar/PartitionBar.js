import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme-legacy'
import Text from '../Text/Text'

const DEFAULT_COLORS = [
  '#000000',
  '#57666F',
  '#028CD1',
  '#21AAE7',
  '#39CAD0',
  '#ADE9EC',
  '#80AEDC',
]

/* eslint-disable react/prop-types */
const DEFAULT_CAPTION = ({ name, bullet, percentage }) => (
  <React.Fragment>
    <DefaultItem>
      {bullet}
      <Text title={name} color={theme.textSecondary}>
        {name}
      </Text>
    </DefaultItem>
    <Percentage>{percentage}%</Percentage>
  </React.Fragment>
)
/* eslint-enable react/prop-types */

const PartitionBar = ({ data, caption, colors }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return null
  }

  const partitions = data
    .sort((p1, p2) => p2.percentage - p1.percentage)
    .map(({ name, percentage }, index) => ({
      name,
      percentage,
      color: colors[index % colors.length],
    }))

  return (
    <React.Fragment>
      <Bar>
        {partitions.map(({ name, percentage, color }, index) => (
          <Partition
            key={index}
            title={`${name}: ${percentage}%`}
            value={percentage}
            color={color}
          />
        ))}
      </Bar>
      {caption && (
        <Caption>
          {partitions.map(({ name, percentage, color }, index) => (
            <CaptionItem key={name + index}>
              {caption({
                name,
                bullet: <Bullet color={color} />,
                percentage,
                index,
                color,
              })}
            </CaptionItem>
          ))}
        </Caption>
      )}
    </React.Fragment>
  )
}

PartitionBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  caption: PropTypes.func,
}

PartitionBar.defaultProps = {
  colors: DEFAULT_COLORS,
  caption: DEFAULT_CAPTION,
}

const Bar = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 10px;
  margin-top: 20px;
  border-radius: 4px;
  overflow: hidden;
`

const Partition = styled.div`
  flex: ${({ value }) => value};
  background: ${({ color }) => color || DEFAULT_COLORS[0]};
`

const Caption = styled.ul`
  margin: 1em 0;
`

const CaptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  list-style: none;
`

const DefaultItem = styled.span`
  display: flex;
  align-items: center;
  max-width: 80%;

  > span:nth-of-type(2) {
    flex-shrink: 1;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const Bullet = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 5px;
  flex-shrink: 0;
  background: ${({ color }) => color || DEFAULT_COLORS[0]};
`

const Percentage = styled(Text).attrs({ weight: 'bolder' })``

export default PartitionBar
