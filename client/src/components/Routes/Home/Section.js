import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  white: {
    backgroundColor: '#fff',
    padding: '32px 0',
    '@media screen and (max-width: 799px)': {
      padding: 0,
    },
    '& h2': {
      color: theme.palette.secondary.main,
    },
  },
  dark: {
    backgroundColor: '#707399',
    color: '#fff',
    '& h2': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: theme.typography.title.fontFamily,
    fontSize: '2.6em',
    margin: '0',
    padding: '16px 0',
  },
});

/**
 * Main divisions of the landing page
 * @param {Object} props
 * @param {string} variant Section colors ['dark'|'white']
 * @param {string} title Section title
 * @param {string} id id to add to the section tag
 */
const Section = ({ variant, title, id, classes, children }) => (
  <section
    id={id}
    className={variant === 'dark' ? classes.dark : classes.white}
  >
    {title ? <h2 className={classes.title}>{title}</h2> : false}
    {children}
  </section>
);

export default withStyles(styles, { withTheme: true })(Section);
