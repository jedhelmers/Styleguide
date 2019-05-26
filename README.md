# Welcome to my React-based Design System

This Design System was created as the single source of truth between design and development. The components here-in shall be used in both Development and the Pattern Library. Therefore, shall changes be made in Design, projects will be able to pull changes from npm.

## Use

1. To use, simply run `npm i @jedhelmers/styleguide` in terminal.
2. Then `npm install`
3. Usage: `import { Heading } from '@jedhelmers/styleguide/src/components/atoms/Heading'`

I'm sure there's a better way to design the folder structure, but seeing how this is a trial-run, I'm not too terribly worried about it.

## Consult the Pattery Library

This package contains building blocks. The Pattern Library shows you how to use them. Consult it.

## Updating

When updating components, add default values to any new incoming-props. This will ensure legacy is supported. It will help minimize tech-debt.

### Framer X
I haven't tested these components in Framer yet, but in theory, they should work. That being said, we should be able to pull real components directly into prototypes. Axure be damned!!!!
