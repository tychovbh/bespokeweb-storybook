import React from 'react';
import * as Tables from './Tables'

export default {
    title: 'Example/Tables',
    component: Tables.Table,
    argsTypes: {}
};

const Template = (args) => <Tables.Table {...args}>
    <thead>
    <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Role</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Adam</td>
        <td>Zapel</td>
        <td>Admin</td>
        <td>azapel@mail.com</td>
    </tr>
    <tr>
        <td>Adam</td>
        <td>Zapel</td>
        <td>Admin</td>
        <td>azapel@mail.com</td>
    </tr>
    <tr>
        <td>Adam</td>
        <td>Zapel</td>
        <td>Admin</td>
        <td>azapel@mail.com</td>
    </tr>
    <tr>
        <td>Adam</td>
        <td>Zapel</td>
        <td>Admin</td>
        <td>azapel@mail.com</td>
    </tr>
    </tbody>
</Tables.Table>;

export const Simple = Template.bind({});
Simple.args = {
    type: 'simple'
};

export const Simple_Striped = Template.bind({});
Simple_Striped.args = {
    type: 'striped'
};