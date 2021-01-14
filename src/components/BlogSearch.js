import React from 'react'
import { navigate } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

export default ({ pageCount }) => {
  return (
    <Location>
      {({ location }) => {
        let search = qs.parse(location.search.replace('?', ''))

        return (
          <select
            value={search.s || ''}
            onChange={e => {
              let search = {}
              search.s = e.target.value
              search = qs.stringify(search)

              const url = location.href
                .replace(location.origin, '')
                .replace(location.search, '')

              navigate(`${url}?${search}`)
            }}
          >
            <option value="gradek">Grade K</option>
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
            <option value="grade4">Grade 4</option>
            <option value="grade5">Grade 5</option>
            <option value="grade6">Grade 6</option>
          </select>
        )
      }}
    </Location>
  )
}
