import React from 'react';

import getJobApplied from './api/getJobApplied';

class JobApplied extends React.Component {
  state = {
    data: [],
    loading: false,
  }

  catchErrors = error => {
    const { name, statusCode, message } = error.response.data.error;
    if (statusCode === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        errorAlertIsOpen: true,
        loading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    const { id } = this.props;

    getJobApplied(id).then(res => {
      const { data } = res;
      console.log(data);
      this.setState({ data, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    return (
      <div>In progress</div>
    );
  }
}

export default JobApplied;
