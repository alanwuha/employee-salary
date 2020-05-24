import React from 'react'
import EmployeeItem from './EmployeeItem'

export default function EmployeeList(props) {
    // Show spinner while waiting for response from API
    let showLoading
    if(props.is_loading) {
        showLoading = (
            <div className="d-flex justify-content-center mb-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Compute limit
    const limit = ((props.params.offset + props.params.limit - 1) < props.data.count) ? (props.params.offset + props.params.limit - 1) : props.data.count

    return (
        <div>
            <p style={pStyle}>Showing {props.params.offset} to {limit} of {props.data.count} records</p>
            <h4 style={h4Style}>Employees</h4>
            {showLoading}
            <ul style={ulStyle} className="d-none d-sm-flex">
                <li className="flex-shrink-1 mr-5">&nbsp;</li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="id" onClick={props.sort}>Id</a>
                </li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="name" onClick={props.sort}>Name</a>
                </li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="login" onClick={props.sort}>Login</a>
                </li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="salary" onClick={props.sort}>Salary</a>
                </li>
                <li className="flex-shrink-1">Action</li>
            </ul>
            {
                props.data.results.map(e => {
                    return <EmployeeItem key={e.id} employee={e} edit={props.edit} delete={props.delete} />
                })
            }
        </div>
    )
}

const pStyle = {
    float: 'right',
}

const h4Style = {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginLeft: '10px',
    marginBottom: '30px',
}

const ulStyle = {
    listStyle: 'none',
    padding: '0px 20px',
    fontWeight: '600',
}

const btnStyle = {
    background: '0',
    border: '0',
    color: '#4c5e7d',
    fontWeight: '600',
}