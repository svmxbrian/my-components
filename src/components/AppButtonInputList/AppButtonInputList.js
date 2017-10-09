import React from 'react'
import Button from 'components/Button'
import List from 'components/List'
import ListItem from 'components/ListItem'
import Input from 'components/Input'

const AppButtonInputList = () => (
  <div>
    <Button
      onClick={() => {
        alert('clicked!')
      }}
      >
      Some text here
    </Button>
    <Input value="default value" />
    <List>
      <ListItem>item 1</ListItem>
      <ListItem>item 2</ListItem>
    </List>
  </div>
)

export default AppButtonInputList
