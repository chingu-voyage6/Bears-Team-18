import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import staticAssets from './static';

const styles = {
  faqContainer: {
    padding: '24px 0',
  },
  faqSection: {
    maxWidth: '750px',
    margin: '0 auto',
    marginBottom: '40px',
  },
};

const FAQ = props => {
  function renderFAQContent(content, classes) {
    return content.map(item => {
      return (
        <ExpansionPanel key={item.key}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color="inherit"
              variant="headline"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              {item.question}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              {item.answer.map((par, index) => {
                if (typeof par === 'object') {
                  return (
                    <p key={index}>
                      <strong>{par[0]}</strong>
                    </p>
                  );
                }

                return <p key={index}>{par}</p>;
              })}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  }

  const { classes } = props;

  return (
    <div className={classes.faqContainer}>
      <div className={classes.faqSection}>
        <Typography variant="title" color="inherit" gutterBottom>
          Company FAQs
        </Typography>
        {renderFAQContent(staticAssets.companyFAQ, classes)}
      </div>

      <div className={classes.faqSection}>
        <Typography variant="title" color="inherit" gutterBottom>
          Program FAQs
        </Typography>
        {renderFAQContent(staticAssets.programFAQ, classes)}
      </div>
    </div>
  );
};

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
