import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Icon from '../../Icon';
import { ARROW_DOWN } from '../../IconList';

import staticAssets from './static';

const styles = {
  faqSection: {
    maxWidth: '750px',
    margin: '0 auto',
    marginBottom: '40px',
  },
  faqTitle: {
    fontSize: '2.8em',
  },

  questionTitle: {
    fontSize: '2em',
    fontWeight: '500',
  },
  answerText: {
    fontSize: '1.6em',
    fontWeight: '500',
  },
};

const FAQ = props => {
  function renderFAQContent(content, classes) {
    return content.map(item => {
      return (
        <ExpansionPanel key={item.key}>
          <ExpansionPanelSummary
            expandIcon={<Icon icon={ARROW_DOWN} color="000" />}
          >
            <h3 className={classes.questionTitle}>{item.question}</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              {item.answer.map((par, index) => {
                if (typeof par === 'object') {
                  return (
                    <p key={index} className={classes.answerText}>
                      <strong>{par[0]}</strong>
                    </p>
                  );
                }

                return (
                  <p key={index} className={classes.answerText}>
                    {par}
                  </p>
                );
              })}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  }

  const { classes } = props;

  return (
    <div>
      <div className={classes.faqSection}>
        <h2 className={classes.faqTitle}>Company FAQs</h2>
        {renderFAQContent(staticAssets.companyFAQ, classes)}
      </div>

      <div className={classes.faqSection}>
        <h2 className={classes.faqTitle}>Program FAQs</h2>
        {renderFAQContent(staticAssets.programFAQ, classes)}
      </div>
    </div>
  );
};

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
