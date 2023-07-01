import React from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

export default function ActivityFilters() {
  return (
    <>
    <Menu verticle='true' size='large' style={{width: '100%', marginTop: 28 }}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item content='All Projects'/>
    </Menu>
    <Header />
    <Calendar />
    </>

  )
}
