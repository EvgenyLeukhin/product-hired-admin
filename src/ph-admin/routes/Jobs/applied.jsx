import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ReadMoreReact from 'read-more-react';

import isEmpty from 'lodash/isEmpty';

import Alerts from '../../components/Alerts/index2.jsx';

import { API_URL } from '../../api/apiUrl';


class JobApplied extends React.Component {
  state = {
    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '',
  }

  onCopyUser = e => {
    e.preventDefault();

    this.setState({ alertType: 'copy', alertIsOpen: true });

    // close alert after 2 sec
    setTimeout(() => {
      this.setState({ alertIsOpen: false });
    }, 2000);
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  render() {
    const { id, name, appliedData } = this.props;
    const { alertIsOpen, alertType, alertErrorText, errorAlertIsOpen } = this.state;

    return (
      <div className="applied-container">
        {
          alertIsOpen && (
            <Alerts id={id} name={name} type={alertType} errorText={alertErrorText} errorAlertIsOpen={errorAlertIsOpen} closeErrorAlert={this.closeErrorAlert} />
          )
        }

        <h4 className="ph-detail-page__title">Talents applied to a job</h4>

        {
          !isEmpty(appliedData) ? appliedData.map(i => {
            return (
              <div className="cardbox  applied-container__item" key={i.id}>
                <div className="row">
                  <div className="col-md-6  applied-container__title">
                    <b>
                      <Link
                        to={`/users/${i.user.id}`}
                        title={`/users/${i.user.id}`}
                        target='_blank'
                      >
                        {`${i.user.name} ${i.user.surname}`}
                      </Link>
                    </b>
                    &nbsp;
                    <span>
                      <a
                        href={`mailto:${i.user.email}`}
                        style={{ fontSize: '14px', color: '#888' }}
                      >
                        {i.user.email}
                      </a>
                    </span>
                  </div>

                  <div className="col-md-6  applied-container__copy-user">
                    <CopyToClipboard text={`${i.user.name} ${i.user.surname} <${i.user.email}>`}>
                      <Button
                        title="Copy user data to clipboard"
                        disabled={!i.user} outline
                        color="primary"
                        onClick={this.onCopyUser}
                      >
                        Copy user
                      </Button>
                    </CopyToClipboard>
                  </div>

                  <div className="col-md-3  applied-container__date">
                    <b>Applied</b><br/>
                    <span>{`${i.created.substring(0, 10)}` || ''}</span>
                  </div>

                  <div className="col-md-3  applied-container__phone">
                    <b>Phone</b><br/>
                    { i.phone ? <a href={`tel:${i.phone}`}>{i.phone}</a> : 'ー' }
                  </div>

                  <div className="col-md-3  applied-container__resume">
                    <b>Resume</b><br/>
                    {
                      <a
                        download
                        href={`${API_URL}${i.url}`}
                        title="Click to download"
                        target="_blank"
                      >
                        Download
                      </a>
                    }
                  </div>

                  <div className="col-md-3" />

                  <div className="col-md-12">
                    <b>How do you know you are an amazing fit for this role?</b>
                    <ReadMoreReact
                      readMoreText="Read more..."
                      text={i.about || 'ー'}
                    />
                  </div>

                </div>
              </div>
            );
          }) : 'No talents'
        }
      </div>
    );
  }
}

export default JobApplied;
