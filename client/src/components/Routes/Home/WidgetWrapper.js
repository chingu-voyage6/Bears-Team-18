import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  widgetWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '40px 0',
    '@media screen and (max-width: 1279px)': {
      padding: '16px 0',
    },
  },
  defaultImg: { width: '200px' },
  lgImg: { width: '300px' },
  widget: {
    width: '25%',
    '@media screen and (min-width: 800px) and (max-width: 1279px)': {
      width: '50%',
      margin: '16px 0',
    },
    '@media screen and (max-width: 799px)': {
      width: '100%',
      margin: '16px 0',
    },
  },
  widgetTitle: {
    fontFamily: theme.typography.title.fontFamily,
    fontSize: '2.5em',
    fontWeight: '400',
    textTransform: 'uppercase',
    margin: '0 0 12px 0',
  },
  widgetDescription: {
    fontSize: '1.6em',
    width: '65%',
    margin: '0 auto',
  },
});

/**
 * Component generating the widgets
 * @param {Object} props Destructured props
 * @param {Object[]} content Static assets to generate
 * @param {string} imgSize ('default'|'large') Determines the images's width
 */
const WidgetWrapper = ({ content, classes, imgSize }) => {
  function renderStatic(content, imgSize) {
    let imgClass = imgSize === 'default' ? classes.defaultImg : classes.lgImg;

    return content.map(item => {
      return (
        <div key={item.title} className={classes.widget}>
          <img className={imgClass} src={item.image} alt="" />
          <h3 className={classes.widgetTitle}>{item.title}</h3>
          <p className={classes.widgetDescription}>{item.description}</p>
        </div>
      );
    });
  }

  return (
    <div className={classes.widgetWrapper}>
      {renderStatic(content, imgSize)}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(WidgetWrapper);
