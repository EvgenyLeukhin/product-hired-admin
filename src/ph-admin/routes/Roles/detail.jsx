import React from 'react';
import slugify from 'slugify';

import { Button } from 'reactstrap';
import AsyncSelect from 'react-select/async';
import Alerts from '../../components/Alerts';
import Spinner from '../../../components/Spinner';

import getRole    from './api/getRole';
import getSkills  from './api/getSkills';
import editRole   from './api/editRole';

class RoleDetail extends React.Component {
  state = {
    // fields
    id: null, name: '', oldName: '', slug: '', weight: null, keywords: '', negative: '', skills: [],

    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // api
    loading: false,
  }

  // change fields
  onChange    = e  => this.setState({ [e.target.name]: e.target.value });

  onChangeSkills = skills => this.setState({ skills });

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
    });
  }

  // close page and go back to table
  closeDetail = () => this.props.history.push('/roles');

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  // edit request
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { id, name, slug, weight, keywords, negative, skills } = this.state;
    editRole(id, name, slug, weight, keywords, negative, skills).then(res => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});

        // push data to router
        const { history } = this.props;
        history.push({
          pathname: '/roles',
          state: { afterEditData: res.data }
        })
      }, 2000);

    }).catch(error => this.catchErrors(error));
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
    const { match } = this.props;

    this.setState({ loading: true });

    // get request
    getRole(match.params.id).then(res => {
      const { id, name, slug, weight, keywords, negative, skills } = res.data;
      this.setState({ id, name, oldName: name, slug, weight, keywords, negative, skills, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    const {
      id, name, oldName, slug, weight, keywords, negative, skills,         // fields
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen,            // alerts
      loading                                                              // api
    } = this.state;


    return (
      <section className="ph-detail-page  container">
        {
          alertIsOpen && (
            <Alerts id={id} name={name} type={alertType} errorText={alertErrorText} errorAlertIsOpen={errorAlertIsOpen}closeErrorAlert={this.closeErrorAlert} />
          )
        }

        <h4 className="ph-detail-page__title">Edit: <b>{oldName}</b></h4>
        <span className="ion-close-round ph-detail-page__close" onClick={this.closeDetail} />

        {
          loading && <div className="ph-detail-page__is-loading"><Spinner /></div>
        }

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={this.editSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-5">
                    <label htmlFor="edit-name">Role</label>

                    <input
                      required
                      name="name"
                      type="text"
                      value={name}
                      id="edit-name"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="edit-slug">Slug</label>

                    <div className="input-group">
                      <input
                        required
                        name="slug"
                        type="text"
                        value={slug}
                        id="edit-slug"
                        onChange={this.onChange}
                        className="form-control"
                      />

                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={this.generateSlug}
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="edit-weight">Weight</label>

                    <input
                      min={0}
                      max={999}
                      name="weight"
                      type="number"
                      value={weight}
                      id="edit-weight"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="edit-keywords">Search Phrases, comma-separated</label>

                    <textarea
                      rows={6}
                      type="text"
                      name="keywords"
                      value={keywords}
                      id="edit-keywords"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="edit-negative">Stop-Words, comma-separated</label>

                    <textarea
                      rows={6}
                      type="text"
                      name="negative"
                      value={negative}
                      id="edit-negative"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="edit-skills">Recommended Skills</label>
                    <AsyncSelect
                      isMulti={true}
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getSkills(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => o.name}
                      onChange={this.onChangeSkills}
                      value={skills}
                    />
                  </div>
                </div>
              </fieldset>

              <footer className="ph-detail-page__buttons">
                <Button outline color="secondary" onClick={this.closeDetail}>Cancel</Button>
                <Button disabled={!name || !slug} outline color="primary" type="submit">Save</Button>
              </footer>

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default RoleDetail;
