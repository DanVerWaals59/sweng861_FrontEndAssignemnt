const adminProfile = {
  id: 1,
  username: 'admin',
  password: 'password',
  gender: 'M',
  dob: new Date('1970-01-01'),
  address: '1600 Pennsylvania Ave NW, Washington, DC, 20500',
  dateCreated: new Date('2024-09-22'),
  jobTitle: 'Software Engineer',
  employer: 'The United States Government',
  salary: '400000.00 '
};
const initialProfiles = [adminProfile];
class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log('Login Button Pressed');
    e.preventDefault();
    const form = document.forms.loginForm;
    const loginUsername = form.username.value;
    const loginPassword = form.password.value;
    if (this.props.loginAttempt) {
      this.props.loginAttempt(loginUsername, loginPassword);
    } else {
      console.error("loginAttempt prop is not defined");
    }
    form.username.value = "";
    form.password.value = "";
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      name: "loginForm",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("u", null, "Login Menu:")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Enter Username: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "username",
      placeholder: "Username"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Enter Password : "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "password",
      placeholder: "Password"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "Login")));
  }
}
class CreateProfile extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log('Pressed Create Account Button');
    e.preventDefault();
    const form = document.forms.accountForm;
    const newProfile = {
      username: form.username.value,
      password: form.password.value,
      gender: form.gender.value,
      dob: new Date(form.dob.value),
      address: form.address.value,
      jobTitle: form.jobTitle.value,
      employer: form.employer.value,
      salary: form.salary.value
    };
    this.props.addProfile(newProfile);
    form.reset;
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      name: "accountForm",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("u", null, "Create Account:")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Create Username: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "username",
      placeholder: "Username"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Create Password : "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "password",
      placeholder: "Password"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Gender : "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "gender",
      placeholder: "M/F"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Date of Birth : "), /*#__PURE__*/React.createElement("input", {
      type: "date",
      name: "dob",
      placeholder: "YYYY-MM-DD"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address :"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "address",
      placeholder: "123 Dirt Rd, Town, State, Zip"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Enter Job Title : "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "jobTitle",
      placeholder: "Job Title"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Enter Employer: "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "employer",
      placeholder: "Employer"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Enter Salary : "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "salary",
      placeholder: "Enter Salary"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "Create Account")));
  }
}
class DisplayProfile extends React.Component {
  render() {
    const profile = this.props.loginProfile;
    return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Username:"), /*#__PURE__*/React.createElement("td", null, profile.username)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Password :"), /*#__PURE__*/React.createElement("td", null, profile.password))));
  }
}
class Dashboard extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Pressed Logout Button');
    this.props.logoutUser();
  }
  render() {
    const profile = this.props.loginProfile;
    const dobDisplay = profile && profile.dob instanceof Date ? profile.dob.toLocaleDateString() : 'N/A';
    return /*#__PURE__*/React.createElement("form", {
      name: "dashboardForm",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("u", null, "Account Information")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Username: "), /*#__PURE__*/React.createElement("label", null, profile && profile.username ? profile.username : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Password : "), /*#__PURE__*/React.createElement("label", null, profile && profile.password ? profile.password : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Gender : "), /*#__PURE__*/React.createElement("label", null, profile && profile.gender ? profile.gender : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Date of Birth : "), /*#__PURE__*/React.createElement("label", null, dobDisplay)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address : "), /*#__PURE__*/React.createElement("label", null, profile && profile.address ? profile.address : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Job Title : "), /*#__PURE__*/React.createElement("label", null, profile && profile.jobTitle ? profile.jobTitle : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Employer: "), /*#__PURE__*/React.createElement("label", null, profile && profile.employer ? profile.employer : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Salary : "), /*#__PURE__*/React.createElement("label", null, profile && profile.salary ? profile.salary : 'N/A')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "LOGOUT")));
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: initialProfiles,
      loginProfile: null,
      loggedIn: false,
      currentPage: 'login'
    };
    this.addProfile = this.addProfile.bind(this);
    this.loginAttempt = this.loginAttempt.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    setTimeout(() => {
      this.setState({
        profiles: initialProfiles
      });
    });
  }
  navigateTo = page => {
    this.setState({
      currentPage: page
    });
  };
  addProfile(profile) {
    console.log('running -App.addProfile');
    profile.id = this.state.profiles.length + 1;
    profile.created = new Date();
    const newProfileList = this.state.profiles.slice();
    newProfileList.push(profile);
    this.setState({
      profiles: newProfileList
    });
    console.log('exiting -App.addProfile');
  }
  loginAttempt(loginUsername, loginPassword) {
    console.log('RUNNING - App.loginAttempt');
    const currentProfiles = this.state.profiles.slice();
    const foundProfile = currentProfiles.find(profile => profile.username === loginUsername);
    if (foundProfile) {
      console.log('VALID USERNAME');
      if (foundProfile.password === loginPassword) {
        console.log('LOGIN SUCCESSFUL');
        this.setState({
          loggedIn: true,
          loginProfile: foundProfile,
          currentPage: 'dashboard'
        });
      } else {
        console.log('LOGIN UNSUCCESSFUL');
        this.setState({
          loggedIn: false
        });
      }
    } else {
      console.log('INVALID USERNAME');
    }
  }
  logoutUser() {
    console.log('RUNNING - App.logoutUser');
    this.setState({
      loggedIn: false,
      loginProfile: null,
      currentPage: 'login'
    });
  }
  render() {
    let content;
    if (this.state.currentPage === 'login') {
      content = /*#__PURE__*/React.createElement(Login, {
        loginProfile: this.state.loginProfile,
        loginAttempt: this.loginAttempt
      });
    } else if (this.state.currentPage === 'create') {
      content = /*#__PURE__*/React.createElement(CreateProfile, {
        addProfile: this.addProfile
      });
    } else if (this.state.currentPage === 'dashboard') {
      content = /*#__PURE__*/React.createElement(Dashboard, {
        loginProfile: this.state.loginProfile,
        logoutUser: this.logoutUser
      });
    }
    console.log(this.state.profiles.length);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Dans Super Cool App"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => this.navigateTo('login')
    }, "LoginPage"), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.navigateTo('create')
    }, "CreatePage"), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.navigateTo('dashboard')
    }, "DashboardPage")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", null, content)));
  }
}
const element = /*#__PURE__*/React.createElement(App, null);
ReactDOM.render(element, document.getElementById('contents'));