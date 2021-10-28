import React from 'react'

import Flag from '../Flag/'
import { Country } from '../../types'
import ButtonComponent from '../Button'
import { useTheme } from '../../context/Context'
import './index.scss'

type TableRowProps = {
  country: Country
  handleClick: (input: React.BaseSyntheticEvent) => void
  disabled: boolean
}
function TableRow({
  country: { flag, name, population, languages, region },
  handleClick,
  disabled,
}: TableRowProps) {
  const { theme } = useTheme()

  return (
    <tr className="table-row">
      <td>
        <Flag url={flag} />
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>
        {languages.map((lan) => (
          <li key={lan.name}>{lan.name}</li>
        ))}
      </td>
      <td>{region}</td>
      <td>
        <ButtonComponent
          handleClick={handleClick}
          text="add "
          disabled={disabled}
          color={theme}
        />
      </td>
    </tr>
  )
}

export default TableRow
