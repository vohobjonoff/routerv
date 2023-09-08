/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'


export default function Users() {
    const {data} = useGlobalContext()
  return (
      <div>
          {data.map((item) => {
              const { id } = item;
              return (
                  <>
                      <Link to={`user/${id}`} >
                          <div key={id}>{item.name}</div>
                      </Link>
                </>
              )
          })}
    </div>
  )
}
