import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Link } from 'react-router-dom'

const Breadcrumbs = (props) => {
    return (
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a"> Home</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Jobs</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default Breadcrumbs;