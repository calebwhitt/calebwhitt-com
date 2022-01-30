import './App.css';

function App() {
    return (
        <div className='App'>
            <div className='Wrapper'>
                <div className='Text-content'>
                    <p>Programming with Python, JavaScript, PHP and Ruby daily.<br/>I protect application code hosted on AWS full time, currently working as a Security Engineer at <a target='_blank' href='https://www.kurtgeiger.com'>Kurt Geiger</a>.</p>
                    <p>Security should be non-obtrusive. I part-manage a team, architect AWS infrastructure, work with suppliers, monitor logs, respond to incidents- the list goes on.</p>
                    <p>More recently, my main focus has been to create and implement SAST, DAST, SCA and IaC linting tools for CI/CD pipelines.</p>

                    <p>Any questions? Send me an email:<br/><a href='mailto:calebwhitt@outlook.com'>calebwhitt@outlook.com</a></p>

                    {/*    <button className="Email-button" role="button">calebwhitt@outlook.com</button>*/}
                    {/*</a>*/}
                </div>

                <div className='Title'>
                    <h1>Caleb Whittington</h1>
                    <h2>SECURITY ENGINEER</h2>
                </div>
            </div>
        </div>
  );
}

export default App;
