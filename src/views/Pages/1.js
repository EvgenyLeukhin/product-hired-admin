onFetchData={(state, instance) => {

  // console.log(state); //sortedData
  // own Table state
  this.setState({ loading: true });
  const pageSize = state.pageSize;
  const page = state.page;

  // fetch count
  axios.get(`${API_URL}/api/api/companies/count`, {
    headers: { Authorization: localStorage.getItem('ph-admin-token') }
  }).then(res => {
    this.setState({
      count: Math.ceil(res.data.count / pageSize),
    });

  // fetch data only for 1 page
  }).then(
    axios.get(`${API_URL}/api/api/companies`, {
      headers: { Authorization: localStorage.getItem('ph-admin-token') },
      params: {
        filter: {
          "limit": pageSize,
          "skip": page * pageSize,
          "order": `${columnName} ${sortingOrder}`
        }
      }
    }).then(res => {
      this.setState({ loading: false, data: res.data });
    })
  )
}}
