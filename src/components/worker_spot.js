import React from 'react'
import PropTypes from 'prop-types'
import WorkerToken from './worker_token'
import './worker_spot.css'



const fillColor = worker => {
  switch (worker) {
    case 0:
      return '#fc8d62'
    case 1:
      return '#ffd92f'
    default:
      return '#efefef'
  }
}

const strokeColor = worker => {
  switch (worker) {
    case 0:
      return '#e64505'
    case 1:
      return '#c7a200'
    default:
      return '#d7d7d7'
  }
}

const WorkerSpot = props => {
  const worker = props.workerSpaces[props.job]
  const onClick = e => {
    e.preventDefault()
    props.onClick(props.job)
  }

  const label = props.label || props.job
  if (worker !== null) {
    return (
      <div className="WorkerSpot">
        <div style={{ display: 'inline-block' }}>
          <WorkerToken fill={fillColor(worker)} stroke={strokeColor(worker)}/>
          {label}
        </div>
      </div>
    )
  } else if (props.disabled) {
    return (
      <div className="WorkerSpot" style={{ display: 'inline-block' }}>
        {label}
      </div>
    )
  } else {
    return (
      <div className="WorkerSpot">
        <div style={{ display: 'inline-block' }}>
          <a href="#" onClick={onClick}>{label}</a>
        </div>
      </div>
    )
  }
}

WorkerSpot.propTypes = {
  workerSpaces: PropTypes.any.isRequired,
  label: PropTypes.string,
  job: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default WorkerSpot