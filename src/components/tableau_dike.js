import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TableauItem from './tableau_item'
import './tableau_dike.css'

const TableauDike = ({
  children,
  flooded,
  style,
  focusedItemIndex,
  handleSetFocus,
  handleReleaseFocus,
}) => (
  <div
    style={style}
    className={classNames('TableauDike', children.type, {
      flooded: flooded,
    })}
  >
    <div>
      {children.contents.map((item, i) => {
        return (
          <TableauItem
            key={i}
            i={i}
            display={focusedItemIndex !== i}
            handleSetFocus={handleSetFocus && handleSetFocus(i)}
          >
            {item}
          </TableauItem>
        )
      })}
      {children.type === 'dike' &&
        children.contents.length === 0 &&
        handleReleaseFocus && (
          <button onClick={handleReleaseFocus}>drop</button>
        )}
    </div>
  </div>
)

TableauDike.propTypes = {
  style: PropTypes.object,
  focusedItemIndex: PropTypes.any,

  focus: PropTypes.object,
  handleSetFocus: PropTypes.func, //if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
}

export default TableauDike