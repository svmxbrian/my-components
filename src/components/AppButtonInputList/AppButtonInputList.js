import React from 'react'
import Button from 'components/Button'
import List from 'components/List'
import Input from 'components/Input'

const AppButtonInputList = () => (
  <div>
    <Button
      text="Click here"
      onClick={() => {
        alert('clicked!')
      }}
      />
    <Input value="default value" />
    <List>
      <div>Child 1</div>
      <div>Child 2</div>
    </List>
  </div>
)

export default AppButtonInputList
