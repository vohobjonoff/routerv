/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalContext } from '../context'
import User from './User'


export default function Users() {
    const {data} = useGlobalContext()
  return (
      <div>
          {data.map((item) => {
              
              return (
                  <User key={item.id} {...item} />
              )
          })}
    </div>
  )
}
