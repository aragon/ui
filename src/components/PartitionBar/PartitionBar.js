import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '..'
import { theme } from '../../theme'

const DEFAULT_COLORS = [
  '#000000',
  '#57666F',
  '#028CD1',
  '#21AAE7',
  '#39CAD0',
  '#ADE9EC',
  '#80AEDC',
]

const PartitionBar = ({ data, caption, colors = DEFAULT_COLORS }) => {
  if (Array.isArray(data) && data.length) {
    const partitions = data.sort((p1, p2) => p2.percentage - p1.percentage)

    return (
      <React.Fragment>
        <Bar>
          {partitions.map(({ name, percentage }, index) => (
            <Partition
              key={index}
              title={`${name}: ${percentage}%`}
              value={percentage}
              color={colors[index]}
            />
          ))}
        </Bar>
        {caption && (
          <Caption>
            {partitions.map(({ name, description, percentage }, index) => {
              const bullet = <Bullet color={colors[index]} />
              const item = description ? (
                <React.Fragment>
                  {bullet}
                  {description}
                </React.Fragment>
              ) : (
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

              return <CaptionItem key={name + index}>{item}</CaptionItem>
            })}
          </Caption>
        )}
      </React.Fragment>
    )
  }

  return null
}

PartitionBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      description: PropTypes.node,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  caption: PropTypes.bool,
}

PartitionBar.defaultProps = {
  caption: true,
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
