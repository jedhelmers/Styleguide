import React, { Component } from 'react';
import { Icon } from './Icon';
import { toTitleCase, FieldStatus } from '../../utils/helpers';

export const CheckBox = props => {
  let { name, classNames, children, checked, actions } = props;

  return React.createElement('label', {
    className: [classNames].join(' '),
    onClick: actions
  }, React.createElement('p', {
    name: name,
    className: "input-checkbox",
    onClick: e => props.onChange(e, name)
  }, children, React.createElement('input', {
    name: name,
    type: "checkbox",
    checked: checked
  }), React.createElement(Icon, {
    name: name,
    icon: [checked && 'check2'],
    classNames: ['checkmark'],
    size: 'sl'
  })));
};