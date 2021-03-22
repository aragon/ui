import React, { useRef, useReducer, useState } from 'react'
import {
  AddressField,
  BackButton,
  Bar,
  Box,
  Button,
  Card,
  CardLayout,
  Checkbox,
  CircleGraph,
  ContextMenu,
  ContextMenuItem,
  DataView,
  DiscButton,
  Distribution,
  DropDown,
  EmptyStateCard,
  Field,
  GU,
  Header,
  Help,
  IconArrowUp,
  IconAtSign,
  IconBlock,
  IconBookmark,
  IconCalendar,
  IconHide,
  IconLock,
  IconPlus,
  IconTrash,
  IdentityBadge,
  Layout,
  Link,
  ProgressBar,
  Radio,
  RadioGroup,
  SearchInput,
  Slider,
  Split,
  Switch,
  SyncIndicator,
  Tabs,
  Tag,
  TextInput,
  Theme,
  Timer,
  TransactionBadge,
  textStyle,
  useLayout,
  useTheme,
  useToast,
} from '@tecommons/ui'
import { ToggleThemeButton } from '../components/current-theme'
import { createAddress } from '../create-address'
import { multiplyArray, seedShuffleArray } from '../utils'

import DataViewSelect from './DataView/DataViewSelect'
import DataViewExpansion from './DataView/DataViewExpansion'
import InfoDemo from './Info'
import ButtonDemo from './Button'
import AccordionDemo from './Accordion'
import AppBadgeDemo from './AppBadge'
import IdentityBadgeDemo from './IdentityBadge'

import emptyStatePng from '../assets/voting-empty-state.png'

const addr = createAddress()

// TODO
//
// Modal
// LineChart
// RadioList
// SidePanel

function Cards({ number = 10, interactive }) {
  const cardProps = interactive
    ? {
        onClick: () => {
          console.log('click click')
        },
      }
    : {}
  return (
    <CardLayout>
      {[...Array(number)].map((v, i) => (
        <Card key={i} {...cardProps} />
      ))}
    </CardLayout>
  )
}

function DemoTabs() {
  const [selected, setSelected] = useState(0)
  return (
    <Tabs
      selected={selected}
      onChange={setSelected}
      items={['Just', 'Tabs', 'Being', 'Tabs']}
    />
  )
}

function DistributionBox() {
  return (
    <Box heading="Box heading">
      <Distribution
        heading="Distribution"
        items={[
          { item: 'Bananas', percentage: 37 },
          { item: 'Apples', percentage: 22 },
          { item: 'Cherries', percentage: 15 },
          { item: 'Oranges', percentage: 12 },
          { item: 'Grapefruits', percentage: 12 },
          { item: 'Rest', percentage: 2 },
        ]}
      />
    </Box>
  )
}

function ToastBox() {
  const toast = useToast()
  return (
    <Box heading="Toast">
      <Button onClick={() => toast('This is a toast')} mode="strong" wide>
        Display Toast
      </Button>
    </Box>
  )
}

function SyncIndicatorBox() {
  const [visible, setVisible] = useState(false)

  let timer = useRef()

  const handleClick = () => {
    clearTimeout(timer.current)
    setVisible(true)
    timer.current = setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <Box heading="Sync indicator">
      <Button onClick={handleClick} mode="strong" wide>
        Display SyncIndicator
      </Button>
      <SyncIndicator visible={visible}></SyncIndicator>
    </Box>
  )
}

function SliderDemo() {
  const [value, setValue] = useState(0)
  return <Slider value={value} onUpdate={setValue} />
}

function FormControlsDemo() {
  const [checkboxes, setCheckboxes] = useState([false, true])
  return (
    <React.Fragment>
      <Field label="SearchInput">
        <SearchInput placeholder="Placeholder" />
        <SearchInput value="Value" css="margin-left: 16px" />
      </Field>
      <Field label="TextInput">
        <TextInput placeholder="Placeholder" />
        <TextInput value="Value" css="margin-left: 16px" />
      </Field>
      <Field label="Checkbox">
        <Checkbox
          checked={checkboxes[0]}
          onChange={checked => setCheckboxes(v => [checked, v[1]])}
        />
        <Checkbox
          checked={checkboxes[1]}
          onChange={checked => setCheckboxes(v => [v[0], checked])}
          css="margin-left: 16px"
        />
        <Checkbox disabled css="margin-left: 16px" />
        <Checkbox checked disabled css="margin-left: 16px" />
      </Field>
      <Field label="Radio">
        <RadioGroup>
          <Radio />
          <Radio checked css="margin-left: 16px" />
        </RadioGroup>
      </Field>
      <Field label="Switch">
        <Switch />
        <span css="margin-left: 16px">
          <Switch checked />
        </span>
      </Field>
      <Field label="DropDown">
        <DropDown
          placeholder="Placeholder"
          items={['Item 1', 'Item 2', 'Item 3']}
        />
        <DropDown
          items={['Selected state', 'Item 2', 'Item 3']}
          selected={0}
          css="margin-left: 16px"
        />
      </Field>
      <Field label="Slider">{() => <SliderDemo />}</Field>
      <Field label="Address field">
        <AddressField
          address="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
          autofocus={false}
        />
      </Field>
    </React.Fragment>
  )
}

export default () => {
  const theme = useTheme()
  const item = useState()
  const { name: layout } = useLayout()

  return (
    <>
      <DiscButton
        css={`
          position: fixed;
          right: ${3 * GU}px;
          bottom: ${2 * GU}px;
        `}
      >
        ?
      </DiscButton>
      <ToggleThemeButton />
      <Header
        primary="Everything"
        secondary={<Button mode="strong" label="Strong button" />}
      />
      <DemoTabs />
      <Cards interactive />
      <Bar primary={<BackButton />} secondary={<Button label="Button" />} />
      <CardLayout>
        {[...Array(3)].map((_, index) =>
          ['activity', 'indicator', 'identifier', 'new'].map(mode =>
            ['normal', 'small'].map(size => (
              <Card key={index + mode + size}>
                <Tag mode={mode} size={size}>
                  {mode}
                </Tag>
              </Card>
            ))
          )
        )}
      </CardLayout>
      <Bar primary={<BackButton />} secondary={<Button label="Button" />} />
      <Split
        primary={
          <Box>
            <h1
              css={`
                ${textStyle('title2')};
                color: ${theme.surfaceContent};
                margin-bottom: ${1 * GU}px;
              `}
            >
              surfaceContent
            </h1>
            <p
              css={`
                ${textStyle('title3')};
                color: ${theme.surfaceContentSecondary};
                margin-bottom: ${1 * GU}px;
              `}
            >
              surfaceContentSecondary
            </p>
            <p
              css={`
                ${textStyle('title3')};
                color: ${theme.surfaceContentSecondary};
                margin-bottom: ${1 * GU}px;
              `}
            >
              <Link>links</Link> <Link>usually</Link> <Link>look</Link>{' '}
              <Link>like</Link> <Link>links</Link>
            </p>
            <p
              css={`
                ${textStyle('title4')};
                color: ${theme.surfaceIcon};
                margin-bottom: ${1 * GU}px;
              `}
            >
              surfaceIcon
            </p>
            {[IconPlus, IconLock, IconHide].map((Icon, index) => (
              <p
                key={index}
                css={`
                  display: flex;
                  align-items: center;
                  ${textStyle('title4')};
                  color: ${theme.surfaceIcon};
                  margin-bottom: ${1 * GU}px;
                `}
              >
                {['tiny', 'small', 'medium', 'large'].map((size, index) => (
                  <Icon
                    key={size}
                    size={size}
                    style={{ marginRight: `${(2 + index * 0.5) * GU}px` }}
                  />
                ))}
              </p>
            ))}
          </Box>
        }
        secondary={<DistributionBox />}
      />
      <Split
        primary={
          <Box>
            <FormControlsDemo />
            <Field label="App badge">
              {() => <AppBadgeDemo layout={false} />}
            </Field>
            <Field label="Identity badge">
              {() => <IdentityBadgeDemo layout={false} />}
            </Field>
            <Field label="Transaction badge">
              {() => (
                <div
                  css={`
                    padding-top: ${1 * GU}px;
                  `}
                >
                  <TransactionBadge
                    transaction={
                      '0x96e31e4f272600413ec39b5ed4094e5b7b3e0da2c8780ef63267e894fc2c9f16'
                    }
                  />
                </div>
              )}
            </Field>

            <Field label="Timer">
              <div
                css={`
                  padding-top: ${1 * GU}px;
                `}
              >
                <Timer end={Date.now() + 5 * (1000 * 60 * 60 * 24)} />
              </div>
            </Field>
            <Field label="Progress Bar">
              <div
                css={`
                  padding-top: ${1 * GU}px;
                `}
              >
                <ProgressBar value={0.5} />
              </div>
              <div
                css={`
                  padding-top: ${3 * GU}px;
                `}
              >
                <ProgressBar value={-1} />
              </div>
            </Field>
          </Box>
        }
        secondary={
          <React.Fragment>
            <Box
              heading={
                <>
                  Help <Help hint="Help hint">Help content</Help>
                </>
              }
            />
            <DistributionBox />
            <Box
              css={`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <CircleGraph value={0.4} size={120} />
            </Box>
          </React.Fragment>
        }
      />
      <Bar primary={<BackButton />} secondary={<Button label="Button" />} />
      <div
        css={`
          display: flex;
          justify-content: center;
          padding: ${9 * GU}px 0 ${9 * GU}px;
        `}
      >
        <EmptyStateCard
          text="You seem to not have any content on your wall."
          action={
            <Button onClick={() => console.log('Click on button')}>
              Create
            </Button>
          }
        />
      </div>
      <Bar primary={<BackButton />} secondary={<Button label="Button" />} />
      <DataViewExpansion />
      <Bar
        primary={<BackButton />}
        secondary={<Button label="Button" />}
        css={`
          margin-top: ${3 * GU}px;
        `}
      />
      <DataViewSelect />
      <Bar
        primary={<BackButton />}
        secondary={<Button label="Button" />}
        css={`
          margin-top: ${3 * GU}px;
        `}
      />
      <InfoDemo header={null} css="margin-top: 0" />
      <Split
        primary={<ButtonDemo onlyBoxes />}
        secondary={
          <React.Fragment>
            <ToastBox />
            <SyncIndicatorBox />
            <ToastBox />
            <SyncIndicatorBox />
          </React.Fragment>
        }
      />
      <Bar primary={<BackButton />} secondary={<Button label="Button" />} />
      <Split
        primary={<AccordionDemo count={5} header={null} />}
        secondary={<Box css="height: 100%" />}
      />
    </>
  )
}
