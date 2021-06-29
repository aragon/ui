import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TextInput, IconBlank, SearchInput, FileInput } from '@aragon/ui'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [files, setFiles] = useState()
  const [valueArr, setFilesObj] = useState(null)
  useEffect(() => {
    if (files) {
      setFilesObj(
        Object.keys(files).map(key => ({
          status: 'loading',
          name: files[key].name,
          url: null,
        }))
      )
      setTimeout(
        () =>
          setFilesObj(
            Object.keys(files).map(key => ({
              status: ['success', 'fail'][Math.round(Math.random())],
              name: files[key].name,
              url: `https://www.google.com`,
            }))
          ),
        3000
      )
    }
  }, [files])

  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-gap: 20px;
        padding: 40px 0;
      `}
    >
      <TextInput placeholder="Enter something" />
      <TextInput placeholder="Auto focused" autofocus wide />
      <form>
        <TextInput placeholder="Enter something" pattern="[A-Za-z]+" wide />
      </form>
      <TextInput
        css="width: 100px"
        adornment="ETH"
        adornmentPosition="end"
        adornmentSettings={{
          width: 55,
          padding: 8,
        }}
      />
      <TextInput
        css="width: 80px"
        adornment="$"
        adornmentPosition="start"
        adornmentSettings={{
          width: 24,
          padding: 8,
        }}
      />
      <TextInput type="number" placeholder={'number only'} />
      <TextInput
        adornment={<IconBlank />}
        adornmentSettings={{ width: 55, padding: 25 }}
        adornmentPosition="start"
      />
      <TextInput adornment={<IconBlank />} adornmentPosition="end" />
      <TextInput.Multiline wide />
      <TextInput.Multiline
        wide
        status={'error'}
        error={'some error also...'}
        adornment={<IconBlank />}
      />
      <SearchInput
        value={searchTerm}
        onChange={(value, ev) => {
          console.log('Search term changed: ', value)
          console.log('Search change event: ', ev)
          setSearchTerm(value)
        }}
      />
      <TextInput
        adornment={<IconBlank />}
        adornmentSettings={{ width: 55, padding: 25 }}
        adornmentPosition="start"
        status={'success'}
      />
      <TextInput
        adornment={<IconBlank />}
        adornmentPosition="end"
        status={'error'} // can use 'noraml' , 'error' & 'success'
      />
      <TextInput
        wide
        placeholder="have title"
        title={'The Title'}
        subtitle={'The Sub Title'}
      />
      <TextInput wide title={'The Title'} subtitle={'The Sub Title'} disabled />
      <TextInput
        wide
        subtitle={'The Sub Title only'}
        placeholder="have title and subtitle"
      />
      <TextInput
        wide
        subtitle={'The Sub Title only'}
        placeholder="have Sub Title only"
        adornment={<IconBlank />}
        adornmentPosition="end"
        disabled
      />
      <TextInput
        wide
        placeholder="have Title only"
        title={'The Title'}
        adornment={<IconBlank />}
        adornmentPosition="start"
        disabled
      />
      <TextInput
        wide
        placeholder="have Title only"
        title={'The Title'}
        adornment={<IconBlank />}
        adornmentPosition="end"
        status={'error'}
        error={'Some error here....'}
      />
      <FileInput
        type="file"
        title={'The Title'}
        subtitle={'The Sub Title'}
        value={valueArr}
        onChange={setFiles}
        multiple={true}
      />
      <TextInput
        wide
        placeholder="have Title only"
        title={'The Title'}
        adornment={<IconBlank />}
        adornmentPosition="end"
        status={'error'}
        error={'Some error here....'}
      />
      <FileInput
        type="file"
        title={'The Title'}
        subtitle={'The Sub Title'}
        status={'error'}
        error={'Some error here....'}
        value={valueArr}
        onChange={setFiles}
        multiple={true}
      />
    </div>
  )
}

export default App
