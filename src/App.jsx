



const adminProfile = 
{
  id: 1, 
  username: 'admin', 
  password: 'password',
  gender: 'M', 
  dob: new Date('1970-01-01'), 
  address: '1600 Pennsylvania Ave NW, Washington, DC, 20500', 
  dateCreated: new Date('2024-09-22'),
  jobTitle: 'Software Engineer', 
  employer: 'The United States Government', 
  salary: '400000.00 ',
}


const initialProfiles = [adminProfile]

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
    form.username.value = ""; form.password.value = "";
    
  }


  render() {
      return (
        <form name="loginForm" onSubmit={this.handleSubmit}>
          <b><u>Login Menu:</u></b>
          <div>
            <label>Enter Username: </label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <label>Enter Password : </label>
            <input type="text" name="password" placeholder="Password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      );
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
      gender:   form.gender.value,
      dob:      new Date(form.dob.value),
      address:  form.address.value,
      jobTitle: form.jobTitle.value,
      employer: form.employer.value,
      salary:   form.salary.value,
    }

    this.props.addProfile(newProfile);
    form.reset
  }
  
  render() {
    return (
      <form name="accountForm" onSubmit={this.handleSubmit}>
        <b><u>Create Account:</u></b>
        <div>
          <label>Create Username: </label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label>Create Password : </label>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <div>
          <label>Gender : </label>
          <input type="text" name="gender" placeholder="M/F" />
        </div>
        <div>
          <label>Date of Birth : </label>
          <input type="date" name="dob" placeholder="YYYY-MM-DD" />
        </div>
        <div>
          <label>Address :</label>
          <input type="text" name="address" placeholder="123 Dirt Rd, Town, State, Zip" />
        </div>
        <div>
          <label>Enter Job Title : </label>
          <input type="text" name="jobTitle" placeholder="Job Title" />
        </div>
        <div>
          <label>Enter Employer: </label>
          <input type="text" name="employer" placeholder="Employer" />
        </div>
        <div>
          <label>Enter Salary : </label>
          <input type="text" name="salary" placeholder="Enter Salary" />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
    );
  }
}

class DisplayProfile extends React.Component {
  render() {
    const profile = this.props.loginProfile
    return (
      <table>
        <tbody>
          <tr>
            <td>Username:</td>
            <td>{profile.username}</td>
          </tr>
          <tr>
            <td>Password :</td>
            <td>{profile.password}</td>
          </tr>
        </tbody>
      </table>
    );
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
    return (
      <form name="dashboardForm" onSubmit={this.handleSubmit}>
        <b><u>Account Information</u></b>
        <div>
          <label>Username: </label>
          <label>{profile && profile.username ? profile.username : 'N/A'}</label>
        </div>
        <div>
          <label>Password : </label>
          <label>{profile && profile.password ? profile.password : 'N/A'}</label>
        </div>
        <div>
          <label>Gender : </label>
          <label>{profile && profile.gender ? profile.gender : 'N/A'}</label>
        </div>
        <div>
          <label>Date of Birth : </label>
          <label>{dobDisplay}</label>
        </div>
        <div>
          <label>Address : </label>
          <label>{profile && profile.address ? profile.address : 'N/A'}</label>
        </div>
        <div>
          <label>Job Title : </label>
          <label>{profile && profile.jobTitle ? profile.jobTitle : 'N/A'}</label>
        </div>
        <div>
          <label>Employer: </label>
          <label>{profile && profile.employer ? profile.employer : 'N/A'}</label>
        </div>
        <div>
          <label>Salary : </label>
          <label>{profile && profile.salary ? profile.salary : 'N/A'}</label>
        </div>
        <div>
          <button>LOGOUT</button>
        </div>
      </form>
    );
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: initialProfiles, 
      loginProfile: null,
      loggedIn: false, 
      currentPage: 'login', 
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
      this.setState({profiles: initialProfiles});
    })
  }

  navigateTo = (page) => {
    this.setState({currentPage: page});
  }

  addProfile(profile) {
    console.log('running -App.addProfile');
    profile.id = this.state.profiles.length+1;
    profile.created = new Date();
    const newProfileList = this.state.profiles.slice();
    newProfileList.push(profile);
    this.setState({profiles: newProfileList});
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
          currentPage: 'dashboard',
        });
      }
      else {
        console.log('LOGIN UNSUCCESSFUL');
        this.setState({loggedIn: false});
      }
    }
    else {
      console.log('INVALID USERNAME');
    }
  }

  logoutUser() {
    console.log('RUNNING - App.logoutUser');
    this.setState({
      loggedIn: false,
      loginProfile: null,
      currentPage: 'login',
    })
    
  }

  render() {
    
    let content;

    if (this.state.currentPage === 'login') {
      content = <Login loginProfile = {this.state.loginProfile} loginAttempt = {this.loginAttempt}/>;
    } else if (this.state.currentPage === 'create') {
      content = <CreateProfile addProfile = {this.addProfile}/>;
    } else if (this.state.currentPage === 'dashboard') {
        content = <Dashboard loginProfile = {this.state.loginProfile} logoutUser = {this.logoutUser}/>;
    }

    console.log(this.state.profiles.length)
    return (
      <React.Fragment>
        <div>
          <h2>Dans Super Cool App</h2>
          <hr></hr>
          <nav>
            <button onClick={() => this.navigateTo('login')}>LoginPage</button>
            <button onClick={() => this.navigateTo('create')}>CreatePage</button>
            <button onClick={() => this.navigateTo('dashboard')}>DashboardPage</button>
          </nav>
          <hr></hr>
          <div>
            {content}
          </div>
        </div>
      </React.Fragment>
    );
  }
}


const element = <App />;
ReactDOM.render(element, document.getElementById('contents'));